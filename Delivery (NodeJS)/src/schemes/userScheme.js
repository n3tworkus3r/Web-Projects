const Joi = require('joi');

/*
CREATE TABLE users
(
  id 		serial 				    PRIMARY KEY,
  login 	character varying(20) 	UNIQUE NOT NULL,
  password	character varying(30)	NOT NULL,
  role 		smallint
);
*/

const UserScheme = {
    create: Joi.object().keys(
        {
            login: Joi.string()
                .alphanum()
                .min(2)
                .max(20)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            role: Joi.number()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            login: Joi.string()
                .alphanum()
                .min(2)
                .max(20)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            role: Joi.number()
                .required()
        }
    )
};

module.exports = UserScheme;