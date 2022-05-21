const HttpStatusCodeError = require("./httpStatusCodeError");

class ForbiddenError extends HttpStatusCodeError  {
    constructor(message) {
        super(message, 403);
    }
}

module.exports = ForbiddenError;