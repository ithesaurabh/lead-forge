import { Request, Response } from "express";
import * as uploadService from "./service.js";
import ApiError from "../../utils/ApiError.js";

export const uploadFile = async (req: Request, res: Response) => {
    if (!req.file) {
        throw new ApiError(400, "File is required");
    }
    const folder = req.body.folder;

    if (!folder) {
        throw new ApiError(400, "Folder is required");
    }
    const result = await uploadService.uploadFile(req.file, folder);

    return res.status(201).json({
        success: true,
        data: result,
    });
};