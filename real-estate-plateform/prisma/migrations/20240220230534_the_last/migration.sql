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
CREATE TABLE `PropertyToSell` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `latAndLng` JSON NOT NULL,
    `propertyType` VARCHAR(191) NOT NULL,
    `bedsNumber` VARCHAR(191) NOT NULL,
    `bathsNumber` VARCHAR(191) NOT NULL,
    `furniture` VARCHAR(191) NOT NULL,
    `surface` INTEGER NOT NULL,
    `Hashtags` JSON NOT NULL,
    `globalLikesNumber` INTEGER NULL DEFAULT 0,
    `ViewByNumber` INTEGER NULL DEFAULT 0,
    `clickedBy` INTEGER NULL DEFAULT 0,
    `ownerId` VARCHAR(191) NOT NULL,
    `ownerEmail` VARCHAR(191) NOT NULL,
    `ownerPhone` VARCHAR(191) NOT NULL,
    `ownerUsedName` VARCHAR(191) NOT NULL,
    `ownerFacebookContact` VARCHAR(191) NULL,
    `ownerInstagramContact` VARCHAR(191) NULL,
    `ownerTwitterContact` VARCHAR(191) NULL,
    `images` JSON NOT NULL,
    `bookingsInfo` JSON NULL,
    `isBoosted` BOOLEAN NOT NULL DEFAULT false,
    `BostedTill` DATETIME(3) NULL,

    UNIQUE INDEX `PropertyToSell_address_latAndLng_ownerEmail_key`(`address`, `latAndLng`, `ownerEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyToRent` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `rentalPeriod` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `latAndLng` JSON NOT NULL,
    `propertyType` VARCHAR(191) NOT NULL,
    `bedsNumber` VARCHAR(191) NOT NULL,
    `bathsNumber` VARCHAR(191) NOT NULL,
    `furniture` VARCHAR(191) NOT NULL,
    `surface` INTEGER NOT NULL,
    `Hashtags` JSON NOT NULL,
    `globalLikesNumber` INTEGER NULL DEFAULT 0,
    `ViewByNumber` INTEGER NULL DEFAULT 0,
    `clickedBy` INTEGER NULL DEFAULT 0,
    `ownerId` VARCHAR(191) NOT NULL,
    `ownerEmail` VARCHAR(191) NOT NULL,
    `ownerPhone` VARCHAR(191) NOT NULL,
    `ownerUsedName` VARCHAR(191) NOT NULL,
    `ownerFacebookContact` VARCHAR(191) NULL,
    `ownerInstagramContact` VARCHAR(191) NULL,
    `ownerTwitterContact` VARCHAR(191) NULL,
    `images` JSON NOT NULL,
    `bookingsInfo` JSON NULL,
    `isBoosted` BOOLEAN NOT NULL DEFAULT false,
    `BostedTill` DATETIME(3) NULL,

    UNIQUE INDEX `PropertyToRent_address_latAndLng_ownerEmail_key`(`address`, `latAndLng`, `ownerEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PropertyToSell` ADD CONSTRAINT `PropertyToSell_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PropertyToRent` ADD CONSTRAINT `PropertyToRent_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
