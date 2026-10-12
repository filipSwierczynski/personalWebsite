resource "aws_dynamodb_table" "visitor_count" {
  name                        = "cloud-resume-test"
  billing_mode                = "PAY_PER_REQUEST"
  hash_key                    = "id"
  deletion_protection_enabled = true
  attribute {
    name = "id"
    type = "S"
  }
}
