import dotenv from "dotenv";

dotenv.config();

const env = {
    NODE_ENV:process.env.NODE_ENV || "production",
    DB_URL:process.env.DATABASE_URL || "",
    PORT: Number(process.env.PORT) || 3000,
    DB_HOST: process.env.DB_HOST || "127.0.0.1",
    DB_PORT: Number(process.env.DB_PORT) || 3306,
    DB_USER: process.env.DB_USER || "",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_NAME: process.env.DB_NAME || "",
};
export default env;