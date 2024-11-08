import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        "string.base":"Pone letras no numeros",
        "string.alphanum": "No uses caracteres especiales"
    }),
    email: joi.string().required(),
    password: joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required().min(2).max(5).messages({
        'number.min':"Minimo 2 digitos",
        'number.max':"Maximo 5 digitos"
    }),
    auto: joi.objectId().required()
})

export default schema