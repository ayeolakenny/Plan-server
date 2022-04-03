/*
  Warnings:

  - You are about to drop the column `username` on the `EventTypes` table. All the data in the column will be lost.
  - Added the required column `title` to the `EventTypes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventTypes" DROP COLUMN "username",
ADD COLUMN     "title" TEXT NOT NULL;
