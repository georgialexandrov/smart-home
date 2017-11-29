const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = function() {
    const name = this.event.request.intent.slots.name.value;
    const number = this.event.request.intent.slots.number.value;
    const params = {
        TableName : process.env.DYNAMODB_TABLE,
        Item: {
            name,
            number
        }
    }
const emit = this.emit;
    dynamoDb.put(params, (err, result) => {
        if (err) emit("Sorry! Channel was not saved");
        else emit(':tell', "Ok");
    });
}