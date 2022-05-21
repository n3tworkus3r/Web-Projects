const HttpStatusCodeError = require("./httpStatusCodeError");

class UnauthorizedError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 401);
    }
}

module.exports = UnauthorizedError;