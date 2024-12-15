/*
  Warnings:

  - You are about to alter the column `usertype` on the `Follower` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Follower` ADD COLUMN `age` VARCHAR(191) NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    MODIFY `usertype` VARCHAR(191) NULL,
    MODIFY `interests` VARCHAR(2000) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `password` VARCHAR(191) NULL DEFAULT 'repeats';
