-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `bookedVisits` JSON NULL,
    `FavoritesPropertiesId` JSON NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyToBuy` (
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

    UNIQUE INDEX `PropertyToBuy_address_ownerEmail_key`(`address`, `ownerEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyToRent` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `rentalPeriod` VARCHAR(191) NOT NULL,
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

    UNIQUE INDEX `PropertyToRent_address_ownerEmail_key`(`address`, `ownerEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PropertyToBuy` ADD CONSTRAINT `PropertyToBuy_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PropertyToRent` ADD CONSTRAINT `PropertyToRent_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
