import userRepository from "./repository.js";
import bcrypt from "bcrypt";

const createUser = async (payload: CreateUserDto) => {
  const existingUser = await userRepository.findByEmail(
    payload.email
  );

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const passwordHash = await bcrypt.hash(
    payload.password,
    10
  );

  return userRepository.createUser({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    passwordHash,
  });
};

export default {
  createUser,
};