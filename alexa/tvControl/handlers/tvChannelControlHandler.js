const request = require('request');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = function() {
    const params = {
        TableName : process.env.DYNAMODB_TABLE,
        KeyConditionExpression: "#yr = :name",
        ExpressionAttributeNames:{
            "#yr": "name"
        },
        ExpressionAttributeValues: {
            ":name": this.event.request.intent.slots.name.value
        }
    };
    const emit = this.emit;
    dynamoDb.query(params,(err, result) => {
        if (err || result.Count == 0) emit(':tell', "Channel was not found in dynamo db database");
        else {
            request(`http://${process.env.HOME_IP}:3000/tv?command=${result.Items[0].number}`, (error, response, body) => {
                if (!error) emit(':tell', "ok");
            });
        }
    });
}