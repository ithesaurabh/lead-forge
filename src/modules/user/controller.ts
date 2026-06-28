import { Request, Response } from "express";
import userService from "./service.js";
import { ChangePasswordUserDto, CreateUserDto, onlyIdDto, PatchUserDto, UpdateUserDto } from "./types.js";
import ApiError from "../../utils/ApiError.js";

const getUser = async (req: Request, res: Response) => {
  const user = await userService.getUser();

  if (user.length === 0) {
    throw new ApiError(404, "No data found");
  }

  return res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: user,
  });
};

const getOneUser = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  const user = await userService.getOneUser(req.params);
  if (!user) {
    throw new ApiError(400, "User doesn't exist");
  }

  return res.status(200).json({
    success: true,
    message: "User data fetched successfully",
    data: user
  })
}
const deleteUser = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  await userService.deleteUser(req.params);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully",
  })
}

const createUser = async (req: Request<{}, {}, CreateUserDto>, res: Response) => {
  const user = await userService.createUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
};

const patchUser = async (req: Request<{}, {}, PatchUserDto>, res: Response) => {
  await userService.patchUser(req.body);

  return res.status(200).json({
    success: true,
    message: "User status updated successfully",
  });
};

const changePassword = async (req: Request<{}, {}, ChangePasswordUserDto>, res: Response) => {
  await userService.changePassword(req.body);

  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
};

const updateUser = async (req: Request<{}, {}, UpdateUserDto>, res: Response) => {
  await userService.udpateUser(req.body);

  return res.status(200).json({
    success: true,
    message: "User updated successfully",
  });
};

export default { createUser, getUser, patchUser, updateUser, changePassword, getOneUser, deleteUser };