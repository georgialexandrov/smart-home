const Alexa = require('alexa-sdk');

const handlers = {
    "TvStatusControl": require('./handlers/tvStatusControlHandler'),
    "TvChannelControl": require('./handlers/tvChannelControlHandler'),
    "TvChannelSetter": require('./handlers/tvChannelSetterHandler')
}

module.exports.tvControl = (event, context, callback) => {
    let alexa = Alexa.handler(event, context);
    alexa.appId = process.env.ALEXA_TV_CONTROL;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
