import { Request, Response } from "express";
import userService from "./service.js";
import { ChangePasswordUserDto, CreateUserDto, onlyIdDto, PatchUserDto, UpdateUserDto } from "./types.js";
import ApiError from "../../utils/ApiError.js";

const getUser = async (req: Request, res: Response) => {
  const user = await userService.getUser();

  return res.status(200).json({success: true,
    message: "Users fetched successfully",
    data: user,
  });
};

const getOneUser = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  const user = await userService.getOneUser(req.params);

  if(!user){
    throw new ApiError(401, "User doesn't exist");
  }

  return res.status(200).json({success: true,
    message: "User data fetched Successfully",
    data:user
  })
}
const deleteUser = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  const user = await userService.getOneUser(req.params);

  if(!user){
    throw new ApiError(401, "User doesn't exist");
  }

  return res.status(200).json({success: true,
    message: "User deleted Successfully",
    data:user
  })
}

const createUser = async (req: Request<{}, {}, CreateUserDto>, res: Response ) => {
  const user = await userService.createUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
};

const patchUser = async ( req: Request<{}, {}, PatchUserDto>, res: Response ) => {
  const user = await userService.patchUser(req.body);

  return res.status(200).json({
    success: true,
    message: "User patched successfully",
    data: user,
  });
};

const changePassword = async ( req: Request<{}, {}, ChangePasswordUserDto>, res: Response ) => {
  const user = await userService.changePassword(req.body);

  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
    data: user,
  });
};

const updateUser = async ( req: Request<{}, {}, UpdateUserDto>, res: Response ) => {
  const user = await userService.udpateUser(req.body);

  return res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
};

export default { createUser, getUser, patchUser, updateUser, changePassword, getOneUser, deleteUser };