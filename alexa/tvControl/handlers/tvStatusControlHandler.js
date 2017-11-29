const request = require('request');

module.exports = function() {
    request(`http://${process.env.HOME_IP}:3000/tv?command=KEY_POWER`, (error, response, body) => {
        if (error) this.emit(':tell', "There is a problem connecting to Raspberry Pi!");
        else this.emit(':tell', "OK");
    });
}