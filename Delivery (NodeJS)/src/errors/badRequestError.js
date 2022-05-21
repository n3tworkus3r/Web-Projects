const HttpStatusCodeError = require("./httpStatusCodeError");

class BadRequestError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 400);
    }
}

module.exports = BadRequestError;