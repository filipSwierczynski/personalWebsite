resource "aws_acm_certificate" "cloudresume_cert" {
  domain_name = "filipsw.com"
  subject_alternative_names = ["filipsw.com",
  "www.filipsw.com"]
  validation_method = "DNS"
  provider          = aws.us-east_1
}
