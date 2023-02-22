import joi from "joi";

export const PetSchema = joi.object({
  name: joi.string().required(),
  age: joi.number().required(),
  birthday: joi.date().required(),
  breed: joi.string(),
  size: joi.string(),
  fur: joi.string(),
  castrated: joi.bool().required(),
  foodRestriction: joi.bool().required(),
  foodType: joi.string(),
  description: joi.string(),
});
