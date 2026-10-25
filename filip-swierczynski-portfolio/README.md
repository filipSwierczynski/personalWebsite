# filipsw.com: Cloud Resume Challenge

My portfolio site, hosted on AWS and managed with Terraform. Changes to the site deploy automatically through GitHub Actions, with no long-lived AWS keys.

**Live:** https://filipsw.com

![Architecture diagram](docs/architecture.png)

## What it does

- Serves a static portfolio site over HTTPS from a private S3 bucket behind CloudFront.
- Shows a visitor counter, backed by a Lambda function and a DynamoDB table.
- Redeploys itself when files under `filip-swierczynski-portfolio/public/` change on `master`.

## Architecture

**Request path**

1. A visitor opens `filipsw.com`. DNS is in Route 53 and points at CloudFront.
2. CloudFront terminates TLS with an ACM certificate (issued in `us-east-1`, as CloudFront requires) and serves cached content.
3. On a cache miss, CloudFront fetches the files from a **private** S3 bucket using Origin Access Control (OAC). The bucket policy only allows this one distribution.
4. The page calls a Lambda function URL. The function increments a counter item in DynamoDB and returns the new value. CORS on the function URL is limited to my own domains.

**Deploy path**

1. I push to `master`.
2. GitHub Actions requests a short-lived OIDC token from GitHub.
3. AWS verifies the token against the GitHub OIDC identity provider and the role's trust policy (this repository and branch only), then issues temporary credentials.
4. The workflow runs `aws s3 sync --delete` to the bucket and creates a CloudFront invalidation.

## Infrastructure as code

Everything below is defined in Terraform (`filip-swierczynski-portfolio/infra/`), imported from resources I first built by hand in the console:

| Area | Resources |
| --- | --- |
| Storage | S3 bucket, public access block, bucket policy (CloudFront only) |
| Edge | CloudFront distribution, Origin Access Control, ACM certificate |
| Backend | Lambda function (zip built with `archive_file`), function URL, invoke permissions, CloudWatch log group (30-day retention) |
| Data | DynamoDB table (on-demand, deletion protection) |
| IAM | Lambda execution role and policies (least privilege), GitHub OIDC provider, deploy role |

State is stored remotely in S3 with lockfile-based locking. Providers use default tags (`Project`, `ManagedBy`).

**Not yet in Terraform:** Route 53 hosted zone and records (managed manually).

## Design decisions

- **Private bucket + OAC** instead of a public bucket or S3 website hosting, so the only way in is through CloudFront.
- **Least privilege:** the Lambda role can only `UpdateItem` on one table and write its own logs. The deploy role can only list, put and delete in the site bucket and create invalidations on one distribution.
- **OIDC instead of access keys:** no AWS credentials are stored in GitHub, and the role can only be assumed from this repository and branch.
- **Import, not rebuild:** the live stack was brought under Terraform with import blocks, which avoided downtime and a second distribution with the same alias.
- **Deletion protection** on stateful resources (`prevent_destroy`, DynamoDB deletion protection) to guard against an accidental destroy.

## Repository layout

```
.github/workflows/deploy-site.yml        CI/CD pipeline
filip-swierczynski-portfolio/
  public/                                the website
  lambda/index.mjs                       visitor counter function
  infra/                                 Terraform
```

## Running Terraform locally

```bash
cd filip-swierczynski-portfolio/infra
terraform init
terraform plan
```

Requires AWS credentials with access to the account and the state bucket.

## What I learned

- Importing existing infrastructure safely: read the plan, and never apply a replace you didn't expect.
- How resources reference each other (`TYPE.LABEL.ATTRIBUTE`) and why that ordering matters.
- How OIDC federation works between GitHub and AWS: provider, role trust policy, permissions policy.
- Debugging by reading errors literally. A `master` vs `main` mismatch was the whole OIDC failure.
