export const CACHE_KEYS = {
    PRODUCTS: "app:products",
    CATEGORIES: "app:categories",
} as const;

export const CACHE_TTL = {
    PRODUCTS: 60 * 60 * 24,
    CATEGORIES: 60 * 60 * 24,
} as const;