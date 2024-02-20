/*
  Warnings:

  - You are about to alter the column `bookingsInfo` on the `propertytorent` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `bookingsInfo` on the `propertytosell` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `propertytorent` MODIFY `bookingsInfo` JSON NULL;

-- AlterTable
ALTER TABLE `propertytosell` MODIFY `bookingsInfo` JSON NULL;
