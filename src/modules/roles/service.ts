import permissionRepository from "../permissions/repository.js";
import roleRepository from "./repository.js";
import ApiError from "../../utils/ApiError.js";
import type { CreateRoleDto, UpdateRoleDto, onlyIdDto, AssignPermissionsDto } from "./types.js";

const getRoles = async ()=>{
  const role = await roleRepository.getRoles();
  return role;
}

const createRole = async (payload: CreateRoleDto) => {
  const existingRole = await roleRepository.findByName(
    payload.name
  );

  if (existingRole) {
    throw new ApiError(401, "Role already exists");
  }

  return roleRepository.createRole({
    name: payload.name,
    description: payload.description
  });
};

const updateRole = async (payload: UpdateRoleDto) => {
  const existingRole = await roleRepository.findById(payload.id);

  if (!existingRole) {
    throw new ApiError(401, "Role doesn't exist");
  }

  const isNameNotUnique = payload.name ? await roleRepository.findByNameExceptThis(payload.name, payload.id) : false;
  if(isNameNotUnique){
    throw new ApiError(401, "Role name already exists");
  }
  return roleRepository.updateRole({
    id : payload.id,
    name : payload.name,
    description : payload.description,
  });
};

const getOneRole = async (payload : onlyIdDto)=>{
  const role = await roleRepository.getOneRole(payload.id);
  return role;
}

const deleteRole = async (payload : onlyIdDto)=>{
  const role = await roleRepository.findById(payload.id);
  if(!role){
    throw new ApiError(404, "Role doesn't exist");
  }
  await roleRepository.deleteRole(payload.id);

  return true;
}

const assignPermissions = async (roleId: string, payload: AssignPermissionsDto) => {
  const role = await roleRepository.findById(roleId);

  if (!role) {
    throw new ApiError(401, "Role not found");
  }

  const permissions = await permissionRepository.findByIds(payload.permissionIds);
  if (permissions.length !== payload.permissionIds.length) {
    throw new ApiError(401,"One or more permissions do not exist");
  }

  await roleRepository.assignPermissions(roleId, payload.permissionIds);

  return roleRepository.findByIdWithPermissions(roleId);
};

export default { getRoles, createRole, updateRole, getOneRole, deleteRole, assignPermissions};