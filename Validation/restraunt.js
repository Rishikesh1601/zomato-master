import joi from "joi";

export const ValidateRestrauntCity = (restrauntObj) => {
    const Schema = joi.object({
        city: joi.string().required()
    })

    return Schema.validateAsync(restrauntObj);
}

export const ValidateRestrauntSearchString = (restrauntObj) => {
    const Schema = joi.object({
        searchString: joi.string().required()
    })

    return Schema.validateAsync(restrauntObj);
}