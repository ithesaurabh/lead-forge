export const S3_FOLDERS = {
CATEGORY_IMAGES: "category-images",
PRODUCT_IMAGES: "product-images",
USER_AVATARS: "user-avatars",
} as const;

export type S3Folder = (typeof S3_FOLDERS)[keyof typeof S3_FOLDERS];

export const ALLOWED_S3_FOLDERS = Object.values(S3_FOLDERS);
