import joi from "joi";

export const newTutorSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  address: joi.string().required(),
  phoneNumber: joi.string().required(),
  debt: joi.bool(),
});
