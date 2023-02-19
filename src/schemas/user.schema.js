import joi from "joi";

export const LoginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string.required(),
});

export const SignUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});
