import app from "./app.js";
import env from "./config/env.js";
import redis from "./redis/cache/redis.js";

const startServer = async () => {
  try {
    await redis.connect();

    console.log("Redis Connected");
    
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect Redis:", error);
    process.exit(1);
  }
};

startServer();