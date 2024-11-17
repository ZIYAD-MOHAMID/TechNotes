const { logEvents } = require("./logger.js");

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );
  res
    .status(res.statusCode ? res.statusCode : 500)
    .json({ message: err.message, isError: true });
};

module.exports = errorHandler;
