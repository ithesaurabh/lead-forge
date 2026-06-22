import { Request, Response } from "express";
import roleService from "./service.js";
import ApiError from "../../utils/ApiError.js";
import { CreateRoleDto, UpdateRoleDto, onlyIdDto, AssignPermissionsDto } from "./types.js";

const getRoles = async (req: Request, res: Response) => {
    const roles = await roleService.getRoles();
    if (roles.length === 0) {
        throw new ApiError(404, "No data found");
    }
    return res.status(200).json({
        success: true,
        message: "Roles fetched successfully",
        data: roles,
    });
};

const createRole = async (req: Request<{}, {}, CreateRoleDto>, res: Response ) => {
  const role = await roleService.createRole(req.body);

  return res.status(201).json({
    success: true,
    message: "Role created successfully",
    data: role,
  });
};


const updateRole = async ( req: Request<{}, {}, UpdateRoleDto>, res: Response ) => {
  await roleService.updateRole(req.body);

  return res.status(200).json({
    success: true,
    message: "Role updated successfully",
  });
};

const getOneRole = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  const role = await roleService.getOneRole(req.params);

  if(!role){
    throw new ApiError(401, "Role doesn't exist");
  }

  return res.status(200).json({success: true,
    message: "Role data fetched successfully",
    data:role
  })
}

const deleteRole = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  await roleService.deleteRole(req.params);

  return res.status(200).json({success: true,
    message: "Role deleted successfully",
  })
}

const assignPermissions = async ( req: Request<{ id: string }, {}, AssignPermissionsDto>, res: Response) => {
  const role =  await roleService.assignPermissions(req.params.id, req.body);

  return res.status(200).json({
    success: true,
    data: role,
  });
};

export default { getRoles, createRole, updateRole, getOneRole, deleteRole, assignPermissions };