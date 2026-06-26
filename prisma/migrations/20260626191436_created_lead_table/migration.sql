-- CreateTable
CREATE TABLE `Lead` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `address` LONGTEXT NULL,
    `message` LONGTEXT NULL,
    `type` ENUM('NEWSLETTER', 'CONTACT_US', 'RFQ') NOT NULL,
    `status` ENUM('NEW', 'IN_PROGRESS', 'QUALIFIED', 'CLOSED', 'REJECTED') NOT NULL DEFAULT 'NEW',
    `productId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    INDEX `Lead_type_idx`(`type`),
    INDEX `Lead_status_idx`(`status`),
    INDEX `Lead_productId_idx`(`productId`),
    INDEX `Lead_email_idx`(`email`),
    INDEX `Lead_phone_idx`(`phone`),
    INDEX `Lead_deletedAt_idx`(`deletedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lead` ADD CONSTRAINT `Lead_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
