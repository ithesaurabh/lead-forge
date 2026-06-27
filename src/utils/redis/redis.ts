import { createClient } from "redis";
import redisConfig from "../../config/redis.js";

const redis = createClient({
  url: redisConfig.URL,
});

export default redis;