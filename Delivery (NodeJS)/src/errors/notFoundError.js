const HttpStatusCodeError = require("./httpStatusCodeError");

class NotFoundError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 404);
    }
}

module.exports = NotFoundError;