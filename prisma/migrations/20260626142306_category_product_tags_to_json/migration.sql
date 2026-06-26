/*
  Warnings:

  - You are about to alter the column `tags` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `tags` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `tags` JSON NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `tags` JSON NULL;
