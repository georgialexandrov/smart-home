const terminal = require('../../terminal');
const binding = {
    power: 'KEY_POWER,KEY_POWER2',
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
const playMultiple = (command) => {
    return command.reduce((prev, current) => {
        prev.push(`irsend SEND_ONCE ${process.env.REMOTE_NAME || 'MTEL'} ${binding[current] || current}`);
        return prev;
    }, []);
}
module.exports = (param) => {
    let commands = [];
    if (binding[param]) param = binding[param];
    if (parseInt(param) > 0 || param == 0) {
        commands = playMultiple(new String(param).split(''));
    } else if (param.indexOf(',') > -1) {
        commands = playMultiple(param.split(','));
    } else commands.push(`irsend SEND_ONCE ${process.env.REMOTE_NAME || 'MTEL'} ${param}`);

    terminal.executeMany(commands);
    return "ok"
}