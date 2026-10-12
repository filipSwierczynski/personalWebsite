resource "aws_s3_bucket" "site" {
  bucket = "filipsw-site"

  lifecycle {
    prevent_destroy = true
  }
}
