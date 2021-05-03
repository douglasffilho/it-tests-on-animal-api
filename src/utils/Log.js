import debug from 'debug';

const log = debug('app');

class Log {
    constructor(location, infoLog, errorLog) {
        this.location = location;
        this.infoLog = infoLog;
        this.errorLog = errorLog;
    }

    info(message, ...args) {
        this.infoLog(`FROM=${this.location}, MESSAGE=${message}`, ...args);
    }

    error(message, ...args) {
        this.errorLog(`FROM=${this.location}, MESSAGE=${message}`, ...args);
    }
}

const init = (source) => {
    const errorLog = log.extend('error');
    const infoLog = log.extend('info');

    return new Log(source, infoLog, errorLog);
};

export default init;
