terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    archive = {
      source = "hashicorp/archive"
    }
  }
  backend "s3" {
    bucket       = "filipsw-tfstate"
    key          = "portfolio/terraform.tfstate"
    region       = "eu-central-1"
    use_lockfile = true
  }
}
