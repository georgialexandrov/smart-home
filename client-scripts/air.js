#!/home/georgi/.nvm/versions/node/v12.4.0/bin/node
const http = require('http');

http.createServer(onRequest).listen(8888);

function onRequest(req, res) {
  let body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    const data = JSON.parse(body);
    const parsed = {
      esp8266id: data.esp8266id,
      software_version: data.software_version,
      ...data.sensordatavalues.reduce((agg, curr) => Object.assign(agg, { [`${curr.value_type}`]: curr.value }), {}),
      timestamp: Date.now()
    }
    parsed.pm10 = parsed.SDS_P1
    parsed.pm25 = parsed.SDS_P2

    delete parsed.SDS_P1
    delete parsed.SDS_P2

    const postData = JSON.stringify(parsed)
    const options = {
      hostname: 'elastic',
      port: 9200,
      path: '/air-quality/esp',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }

    const elastic = http.request(options, (res) => {
      res.setEncoding('utf8');
    });

    elastic.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
    });

    elastic.write(postData);
    elastic.end;

    res.writeHead(200);
    res.end(body);
  });
}