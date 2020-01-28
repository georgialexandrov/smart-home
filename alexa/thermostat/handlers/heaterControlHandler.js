const request = require('request');

module.exports = function() {
    let emit = this.emit
    let action = this.event.request.intent.slots && this.event.request.intent.slots.status.value || 'off';
    request(`http://${process.env.HOME_IP}:30387/thermostat?action=${action}`, (error, response, body) => {
        if (error) {
            console.log(error);
            emit(':tell', "There is a problem connecting to Raspberry Pi!");
        }
        else {
            console.log('All good');
            if (action == 'on') {
                emit(':tell', "The heater is on, but you don't need it. You're hot!");
            } else {
                emit(':tell', "The heater is off. I told you, you're hot enough!");
            }
        }
    });
}   