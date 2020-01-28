const request = require('request');

module.exports = {
  Query: {
    latest_air_quality: () => {
      const url = 'http://elastic:9200/air-quality/_search?sort=datetime:desc&size=1'

      return new Promise((resolve, rej) => {
        request.post(url, { json: { "query": { "bool": {} } } }, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            resolve(body.hits.hits[0]._source)
          }
        });
      })
    },
    daily_air_quality: () => {
      const url = 'http://elastic:9200/air-quality/_search?sort=datetime:desc&size=584'

      return new Promise((resolve, rej) => {
        request.post(url, {
          json: {
            "query": {
              "range": {
                "datetime": {
                  "gte": "2020-01-19T00:00:00",
                  "lte": "2020-01-20T00:00:00"
                }
              }
            }
          }
        }, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            resolve(body.hits.hits.map(hit => hit._source))
          }
        });
      })
    }
  },
};




