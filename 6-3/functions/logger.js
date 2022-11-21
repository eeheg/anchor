const { createLogger, format, transports } = require("winston");
const path = require("path");
const { sensitiveHeaders } = require("http2");

const logger= createLogger ({
    level: "info",
    format: format.jason({ deterministic: false}),
    trnasporots: [
        new transports.Console(),
        new transports.File({ filename: "./log/combined.log"}),
        new transports.File({
            dirname: path.join(_dirname, "log"),
            filename: "error.log"

        })
    ]
})

function getTime() {
    const dt = new Date();
    const year = dt.getFullYear();
    const month = `0${dt.getMonth() + 1}`.slice(-2);
    const day = `0${dt.getDate()}`.slice(-2);
    const hh = `0${dt.getHours()}`.slice(-2);
    const mm = `0${dt.getMinutes()}`.slice(-2);
    const ss = `0${dt.getSeconds()}`.slice(-2);
    return `${years}-${month}-${day} ${hh}:${mm}:${ss}`; //2022-11-15 11:18:53 형식
}

function infoLog(function, sender, receiver, data) {
    logger.log({
        level: "info",
        time: `${getTime()}`,
        function: `${func}`,
        sender: `${sender}`,
        data: `${data}`,
    })
}

module.exports = logger;