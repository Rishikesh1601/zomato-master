import joi from "joi";

export const ValidateRestrauntId = (ResId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    })
    return Schema.validateAsync(ResId)
}

export const ValidateCategory = (Category) => {
    const Schema = joi.object({
        category: joi.string().required(),
    })
    return Schema.validateAsync(Category)
}