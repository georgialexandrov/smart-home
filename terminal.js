const fs = require('fs');
const spawn = require('child_process').spawn;
const winston = require('winston');
// TODO: send to elastic
winston.add(winston.transports.File, { filename: 'error.log' });

const execute = (command) => {
    let args = command.split(' ');
    const terminal = spawn(args.shift(), args)
        .on('error', err => winston.log('error', err));

    // TODO: add trace on stdout
    terminal.stderr.on('data', (err) => winston.log('error', err));
}
module.exports = {
    execute,
    executeMany: commands => commands.map(command => execute(command))
}