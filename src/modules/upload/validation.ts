import { z } from "zod";
import { S3_FOLDERS } from "../../constants/s3.js";

export const uploadSchema = z.object({
  folder: z.enum([
    S3_FOLDERS.CATEGORY_IMAGES,
    S3_FOLDERS.PRODUCT_IMAGES,
    S3_FOLDERS.USER_AVATARS,
  ]),
});