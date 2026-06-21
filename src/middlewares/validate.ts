import { Request, Response, NextFunction } from "express";
import { ZodObject, } from "zod";


type ValidationSchemas = {
  body?: ZodObject;
  params?: ZodObject;
  query?: ZodObject;
};

export const validate = (schemas: ValidationSchemas) => (req: Request, res: Response, next: NextFunction) => {
  try {
    if (schemas.body) {
      req.body = schemas.body.parse(req.body);
    }
    if (schemas.params) {
      req.params = schemas.params.parse(req.params) as typeof req.params;
    }


    next();
  } catch (error) {
    next(error);
  }
};