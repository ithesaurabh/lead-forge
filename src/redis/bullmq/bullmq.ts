import IORedis from "ioredis";
import redisConfig from "../../config/redis.js"
const connection = new IORedis({
    host: redisConfig.HOST,
    port: redisConfig.PORT,
    maxRetriesPerRequest: null,
});

export default connection;