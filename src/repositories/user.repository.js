import User from "../models/User.model.js";

export async function createUser(user) {
  return await User.create(user);
}

export async function findUserByEmail(email) {
  return await User.findOne({ email });
}
