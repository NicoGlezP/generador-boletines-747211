import { s3 } from "../config/aws";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (file: Express.Multer.File) => {
  const key = `${uuidv4()}-${file.originalname}`;

  const params = {
    Bucket: process.env.S3_BUCKET!,
    Key: key,
    Body: file.buffer,
  };

  const result = await s3.upload(params).promise();

  return result.Location; // URL del archivo
};
