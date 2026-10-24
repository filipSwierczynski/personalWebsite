data "archive_file" "lambda" {
  type        = "zip"
  source_file = "${path.module}/../lambda/index.mjs"
  output_path = "${path.module}/build/lambda.zip"
}

resource "aws_lambda_function" "lambda" {
  filename      = data.archive_file.lambda.output_path
  function_name = "cloudresume-test-api"
  role          = aws_iam_role.lambda.arn
  handler       = "index.handler"
  runtime       = "nodejs24.x"
  code_sha256   = data.archive_file.lambda.output_base64sha256
  environment {
    variables = {
      TABLE_NAME = "cloud-resume-test"
    }
  }

}

resource "aws_lambda_function_url" "lambda_url" {
  function_name      = aws_lambda_function.lambda.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = ["https://filipsw.com", "https://www.filipsw.com", "http://127.0.0.1:5501"]
  }
}



resource "aws_lambda_permission" "lambda_url_invoke" {
  statement_id             = "FunctionURLAllowInvokeAction"
  function_name            = aws_lambda_function.lambda.function_name
  action                   = "lambda:InvokeFunction"
  principal                = "*"
  invoked_via_function_url = true
}

resource "aws_lambda_permission" "lambda_perm" {
  statement_id           = "FunctionURLAllowPublicAccess"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.lambda.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}



resource "aws_cloudwatch_log_group" "logs" {
  name              = "/aws/lambda/cloudresume-test-api"
  retention_in_days = 30
}


