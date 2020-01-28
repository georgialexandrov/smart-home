const Alexa = require('alexa-sdk');

const handlers = {
    "heater": require('./handlers/heaterControlHandler'),
    "Unhandled": require('./handlers/heaterControlHandler')
}

module.exports.alfred = (event, context, callback) => {
  let alexa = Alexa.handler(event, context);
    alexa.appId = process.env.ALEXA_THERMOSTAT;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
