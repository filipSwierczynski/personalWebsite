resource "aws_iam_openid_connect_provider" "default" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = [
    "sts.amazonaws.com"
  ]
}

resource "aws_iam_role" "github_deploy" {
  name = "github-actions-deploy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Federated = aws_iam_openid_connect_provider.default.arn }
      Action    = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = { "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com" }
        StringLike   = { "token.actions.githubusercontent.com:sub" = "repo:filipSwierczynski/personalWebsite:ref:refs/heads/master" }
      }
    }]
  })

}

resource "aws_iam_role_policy" "deploy-site" {
  name = "deploy-site"
  role = aws_iam_role.github_deploy.name

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : ["s3:ListBucket"],
        "Resource" : aws_s3_bucket.site.arn
      },
      {
        "Effect" : "Allow",
        "Action" : ["s3:PutObject", "s3:DeleteObject"],
        "Resource" : "${aws_s3_bucket.site.arn}/*"
      },
      {
        "Effect" : "Allow",
        "Action" : ["cloudfront:CreateInvalidation"],
        "Resource" : aws_cloudfront_distribution.cloudresume_distribution.arn
      },
    ]
  })

}

