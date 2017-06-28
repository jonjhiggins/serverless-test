# serverless-test

Simple example to store Australian states and supporting info in a database. From article on Serverless at [http://jonhiggins.co.uk/words/going-serverless](http://jonhiggins.co.uk/words/going-serverless).

## Deploy

1. `npm i serverless -g`
2. `serverless deploy`

## Test

1. Add a new state: `curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/states --data '{ "state": "South Australia", "slogan": "The Wine State", "capital": "Adelaide" }'`
2. View states in database: `curl -X GET https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/states`
