import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const updateCommand = new UpdateCommand({
    TableName: process.env.TABLE_NAME,
    Key: { id: "views"},
    UpdateExpression: "set #v = if_not_exists(#v, :zero) + :inc",
    ExpressionAttributeNames: { "#v": "views"},
    ExpressionAttributeValues: { ":inc": 1, ":zero": 0},
    ReturnValues: "UPDATED_NEW"
  });
  const updateResponse = await docClient.send(updateCommand)

  return {
    statusCode: 200,
    body: JSON.stringify({ views: updateResponse.Attributes.views }),
  };
}
