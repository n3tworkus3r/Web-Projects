const Joi = require('joi');

const ProductScheme = {
    create: Joi.object().keys(
        {
            name: Joi.string()
                .alphanum()
                .min(1)
                .max(255)
                .required()
        } 
    ),

    edit: Joi.object().keys(
        {
            name: Joi.string()
            .alphanum()
            .min(1)
            .max(255)
            .required()
        }
    )
};

module.exports = ProductScheme;