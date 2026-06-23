import userRepository from "./repository.js";
import roleRepository from "../roles/repository.js";
import bcrypt from "bcrypt";
import type { ChangePasswordUserDto, CreateUserDto, PatchUserDto, UpdateUserDto, onlyIdDto} from "./types.js";
import ApiError from "../../utils/ApiError.js";

const createUser = async (payload: CreateUserDto) => {
  const existingUser = await userRepository.findByEmail(
    payload.email
  );

  if (existingUser) {
    throw new ApiError(400, "Email already exists");
  }

  const validRole = payload.roleId ?  await roleRepository.findById(payload.roleId) : "";
  if(!validRole){
    throw new ApiError(400, "Not a valid role");
  } 

  const passwordHash = await bcrypt.hash(
    payload.password,
    10
  );

  const user = await userRepository.createUser({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    roleId : payload.roleId,
    passwordHash
  });
  return await userRepository.getOneUser(user.id);
};

const patchUser = async (payload: PatchUserDto) => {
  const existingUser = await userRepository.findById(payload.id);
  if (!existingUser) {
    throw new ApiError(400, "User doesn't exist");
  }

  return userRepository.changeStatus({
    id : payload.id,
    isActive: payload.newStatus,
  });
};

const changePassword = async (payload: ChangePasswordUserDto) => {
  const existingUser = await userRepository.findByEmail(payload.email);

  if (!existingUser) {
    throw new ApiError(400, "User doesn't exist");
  }
  const passwordHash = await bcrypt.hash(
    payload.newPassword,
    10
  );
  return userRepository.changePassword({
    email : payload.email,
    newPasswordHash: passwordHash,
  });
};

const udpateUser = async (payload: UpdateUserDto) => {
  const existingUser = await userRepository.findById(payload.id);

  if (!existingUser) {
    throw new ApiError(400, "User doesn't exist");
  }

  const isMailNotUnique = payload.email ? await userRepository.findByEmailExceptThis(payload.email, payload.id) : false;
  if(isMailNotUnique){
    throw new ApiError(400, "Email already exists");
  }

  const isRoleValid = payload.roleId ? await roleRepository.findById(payload.roleId) : false;
  if(!isRoleValid){
    throw new ApiError(400, "Role does not exist");
  }
  return userRepository.updateUser({
    id : payload.id,
    firstName : payload.firstName,
    lastName : payload.lastName,
    email : payload.email,
    roleId : payload.roleId
  });
};

const getUser = async ()=>{
  const user = await userRepository.getUsers();
  return user;
}
const getOneUser = async (payload : onlyIdDto)=>{
  const user = await userRepository.getOneUser(payload.id);
  return user;
}
const deleteUser = async (payload : onlyIdDto)=>{
  const user = await userRepository.findById(payload.id);
  if(!user){
    throw new ApiError(404, "User doesn't exist");
  }
  await userRepository.deleteUser(payload.id);

  return true;
}

export default { createUser, getUser, patchUser, udpateUser, changePassword, getOneUser, deleteUser};