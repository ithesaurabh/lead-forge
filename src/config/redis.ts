import dotenv from "dotenv";

dotenv.config();

const redis = {
    URL:process.env.REDIS_URL || "redis://localhost:6379",
};
export default redis;