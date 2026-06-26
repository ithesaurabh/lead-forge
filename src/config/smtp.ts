import dotenv from "dotenv";

dotenv.config();

const smtp = {
    SMTP_HOST:process.env.SMTP_HOST || "",
    SMTP_PORT: process.env.SMTP_PORT || "",
    SMTP_USER: process.env.SMTP_USER || "",
    SMTP_PASSWORD: process.env.SMTP_PASSWORD || "",
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL || "",
};
export default smtp;