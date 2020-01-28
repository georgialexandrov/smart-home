const terminal = require('../../terminal');

module.exports = (action) => {
    if (action == 'on') {
        terminal.execute(`/bin/echo 1 > /sys/class/gpio/gpio17/value`);
    } else terminal.execute(`/bin/echo 0 > /sys/class/gpio/gpio17/value`);

    return "ok"
}