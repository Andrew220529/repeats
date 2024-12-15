/*
  Warnings:

  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Follower` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `profileImgUrl` VARCHAR(191) NULL,
    MODIFY `biography` VARCHAR(191) NULL,
    MODIFY `interests` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `caption` VARCHAR(191) NULL,
    ADD COLUMN `commentsCount` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `likeCount` INTEGER NULL,
    ADD COLUMN `mediaProductType` VARCHAR(191) NULL,
    ADD COLUMN `mediaUrl` VARCHAR(191) NULL,
    ADD COLUMN `permalink` VARCHAR(191) NULL,
    ADD COLUMN `timestamp` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
