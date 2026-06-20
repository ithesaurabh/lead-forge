import { Request, Response } from "express";
import userService from "./service.js";
import { CreateUserDto } from "./types.js";

const createUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  const user = await userService.createUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
};

export default {
  createUser,
};