const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const uuid = Math.floor(Math.random() * 100000000).toString();
  const data = JSON.parse(event.body);
  if (typeof data.state !== 'string' || typeof data.slogan !== 'string' || typeof data.capital !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create a new Australian state.'));
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid,
      state: data.state,
      slogan: data.slogan,
      capital: data.capital,
    },
  };

  // write the state to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create a new Australian state.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
