import { CACHE_KEYS, CACHE_TTL } from "../../constants/cache.js";
import repository from "../../modules/product/repository.js";
import redis from "./redis.js";

const refreshProductsCache = async () => {
  const products = await repository.getProduct();

  await redis.set(
    CACHE_KEYS.PRODUCTS,
    JSON.stringify(products),
    {
      EX: CACHE_TTL.PRODUCTS,
    }
  );
};

export default refreshProductsCache;