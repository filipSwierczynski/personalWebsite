provider "aws" {
  region = "eu-central-1"

  default_tags {
    tags = {
      Project   = "filipsw-portfolio"
      ManagedBy = "terraform"
    }
  }
}

provider "aws" {
  alias  = "us-east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project   = "filipsw-portfolio"
      ManagedBy = "terraform"
    }
  }
}
