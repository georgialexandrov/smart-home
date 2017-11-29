const terminal = require('../terminal');
const binding = {
    power: 'KEY_POWER',
    volumeup: 'KEY_VOLUMEUP',
    volumedown: 'KEY_VOLUMEDOWN',
    1: 'KEY_1',
    2: 'KEY_2',
    3: 'KEY_3',
    4: 'KEY_4',
    5: 'KEY_5',
    6: 'KEY_6',
    7: 'KEY_7',
    8: 'KEY_8',
    9: 'KEY_9',
    0: 'KEY_0',
}
module.exports = (param) => {
    let commands = [];
    if (parseInt(param) > 0 || param == 0) {
        commands = (new String(param)).split('').reduce((prev, current) => {
            prev.push(`irsend SEND_ONCE ${process.env.REMOTE_NAME || 'MTEL'} ${binding[current]}`);
            return prev;
        }, []);
    } else commands.push(`irsend SEND_ONCE ${process.env.REMOTE_NAME || 'MTEL'} ${param}`);

    terminal.executeMany(commands);
    return "ok"
}