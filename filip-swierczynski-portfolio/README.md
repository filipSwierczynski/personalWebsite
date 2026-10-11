# Filip Swierczynski — Portfolio

Personal portfolio site: a single-page, minimal monochrome design showcasing
projects, built and deployed like production infrastructure rather than a
static hobby page.

Live at [filipsw.com](https://filipsw.com).

---

## What this is

- A showcase of selected projects (case studies, stack, outcomes).
- A sandbox for practicing production-grade delivery: infrastructure as code,
  automated CI/CD, and cloud hosting — not just "upload some HTML."

## Stack

- **Frontend:** static HTML/CSS/JS, no framework, no build step.
- **Hosting:** AWS — private S3 bucket behind CloudFront (CDN + HTTPS via
  ACM), DNS on Route 53.
- **IaC (target):** Terraform, defining the S3 bucket, CloudFront
  distribution, Route 53 records, and ACM certificate — so the whole stack is
  reproducible and destroyable with one command, not clicked together in the
  console.
- **CI/CD (target):** GitHub Actions — push to `main` runs a deploy workflow
  that syncs `public/` to S3 and invalidates the CloudFront cache.

## Running locally

```bash
cd public && python3 -m http.server
```

Or just open `public/index.html` in a browser — no build step required.

## Adding a project

Add a project card in `public/index.html` (`.projects` section) and a matching
detail page in `public/projects/`, following the pattern of the existing
pages.
