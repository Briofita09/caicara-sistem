import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/user.repository.js";

const numberOfSalts = 10;

export async function createUser(user) {
  const userExist = await userRepository.findUserByEmail(user.email);
  console.log(userExist);

  if (userExist) return null;

  const salt = bcrypt.genSaltSync(numberOfSalts);
  const hashedPassword = bcrypt.hashSync(user.password, salt);
  const newUser = await userRepository.createUser({
    ...user,
    passwordHash: hashedPassword,
  });
  return newUser;
}

export async function loginUser(user) {
  const userExist = await userRepository.findUserByEmail(user.email);

  if (!userExist) return null;
  console.log(userExist);

  if (!bcrypt.compareSync(user.password, userExist.passwordHash)) return null;

  const expiresIn = process.env.EXPIRES_IN;
  const secretToken = process.env.SECRET_TOKEN;

  const token = jwt.sign({ user: userExist.id }, secretToken, { expiresIn });

  const returnedUser = {
    token,
    name: userExist.name,
    email: userExist.email,
  };

  return returnedUser;
}
