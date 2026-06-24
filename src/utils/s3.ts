import { S3Client } from "@aws-sdk/client-s3";
import aws from "../config/aws.js";
export const s3Client = new S3Client({
  region: aws.AWS_REGION,
  credentials: {
    accessKeyId: aws.AWS_ACCESS_KEY_ID!,
    secretAccessKey: aws.AWS_SECRET_ACCESS_KEY!,
  },
});