import Joi from "joi";

const userValidator= Joi.object({
    name:       Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,30}$/).required().messages({
         'string.pattern.base':'Only letters min 1 max 30 characters'
    }),
    username:   Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,30}$/).required().messages(
        {
            'string.pattern.base':'Only letters min 1 max 30 characters'
        }
    ),
    email:  Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages(
        {
            'email':'must be email with @'
        }
    )}
);

export {
    userValidator
}

// import Joi from "joi";
//
// const carValidator = Joi.object({
//     brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
//         'string.pattern.base':'Only letters min 1 max 20 characters'
//     }),
//     price: Joi.number().min(0).max(1_000_000).required().messages({
//         'number.min':'my custom min 0',
//     }),
//     year: Joi.number().min(1990).max(new Date().getFullYear()).required()
// })
//
// export {
//     carValidator
// }