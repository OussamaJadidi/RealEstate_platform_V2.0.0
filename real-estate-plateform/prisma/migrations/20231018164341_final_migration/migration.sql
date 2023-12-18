/*
  Warnings:

  - You are about to drop the `propertytobuy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `propertytobuy` DROP FOREIGN KEY `PropertyToBuy_ownerId_fkey`;

-- DropTable
DROP TABLE `propertytobuy`;

-- CreateTable
CREATE TABLE `PropertyToSell` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `images` JSON NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `propertyType` VARCHAR(191) NOT NULL,
    `bedsNumber` INTEGER NOT NULL,
    `bathsNumber` INTEGER NOT NULL,
    `meublement` VARCHAR(191) NOT NULL,
    `surface` DOUBLE NOT NULL,
    `Hashtags` JSON NULL,
    `globalLikesNumber` INTEGER NULL DEFAULT 0,
    `ViewByNumber` INTEGER NULL DEFAULT 0,
    `clickedBy` INTEGER NULL DEFAULT 0,
    `ownerId` VARCHAR(191) NOT NULL,
    `ownerEmail` VARCHAR(191) NULL,
    `ownerPhone` VARCHAR(191) NULL,

    UNIQUE INDEX `PropertyToSell_address_ownerEmail_key`(`address`, `ownerEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PropertyToSell` ADD CONSTRAINT `PropertyToSell_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
