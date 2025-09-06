-- AlterTable
ALTER TABLE `news` ADD COLUMN `comments` JSON NULL,
    ADD COLUMN `likes` JSON NULL;
