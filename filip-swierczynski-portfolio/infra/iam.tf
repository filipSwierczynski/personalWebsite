resource "aws_iam_role" "lambda" {
  name = "cloudresume-test-api-role-s3rdo394"
  path = "/service-role/"
  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "lambda.amazonaws.com"
        },
        "Action" : "sts:AssumeRole"
      }
    ]
  })
}




resource "aws_iam_policy" "lambda_logging" {
  name = "AWSLambdaBasicExecutionRole-adf651ae-f86b-4587-b3ba-e0a9431d7731"
  path = "/service-role/"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : "logs:CreateLogGroup",
        "Resource" : "arn:aws:logs:eu-central-1:070500515115:*"
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        "Resource" : [
          "arn:aws:logs:eu-central-1:070500515115:log-group:/aws/lambda/cloudresume-test-api:*"
        ]
      }
    ]
  })
}


resource "aws_iam_role_policy_attachment" "lambda_logging" {
  role       = aws_iam_role.lambda.name
  policy_arn = aws_iam_policy.lambda_logging.arn
}


resource "aws_iam_role_policy" "lambda_dynamodb" {
  name = "lambdaWrite"
  role = aws_iam_role.lambda.name

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : "dynamodb:UpdateItem",
        "Resource" : "arn:aws:dynamodb:eu-central-1:070500515115:table/cloud-resume-test"
      }
    ]
  })
}
