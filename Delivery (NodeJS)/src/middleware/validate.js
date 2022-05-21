BadRequestError = require('../errors/badRequestError');

module.exports = (scheme) => {
    return (req, res, next) => {
        const { error, value } = scheme.validate(req.body);

        if (error) {
            throw new BadRequestError(error.details[0].message.toString());
        }
        else {
            req.body = value;
            next();
        }
    }
}