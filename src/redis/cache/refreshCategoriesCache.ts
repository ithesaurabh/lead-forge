import { CACHE_KEYS, CACHE_TTL } from "../../constants/cache.js";
import repository from "../../modules/category/repository.js";
import redis from "./redis.js";

const refreshCategoriesCache = async () => {
  const categories = await repository.getCategory();

  await redis.set(
    CACHE_KEYS.CATEGORIES,
    JSON.stringify(categories),
    {
      EX: CACHE_TTL.CATEGORIES,
    }
  );
};

export default refreshCategoriesCache;