const {ApplicationError} = require('../../utils/application_errors/ApplicationError.js');
module.exports = (error, req, res, next) => {
  if (error instanceof ApplicationError) {
    res.status(error.status).send(error.message);
  }
  next(error);
};