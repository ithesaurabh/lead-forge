import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { s3Client } from "../../utils/s3.js";
import aws from "../../config/aws.js";
import { S3Folder } from "../../constants/s3.js";

const bucketName = aws.AWS_BUCKET_NAME!;

export const uploadFile = async (file: Express.Multer.File, folder:S3Folder) => {
  const fileName = `${randomUUID()}-${file.originalname}`;

  const key = `${folder}/${fileName}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  return {
    fileName,
    key,
    url: `https://${bucketName}.s3.${aws.AWS_REGION}.amazonaws.com/${key}`,
  };
};