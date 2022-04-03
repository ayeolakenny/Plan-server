/*
  Warnings:

  - You are about to drop the column `additionalNotes` on the `Atendee` table. All the data in the column will be lost.
  - Added the required column `additionalNotes` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atendee" DROP COLUMN "additionalNotes";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "additionalNotes" TEXT NOT NULL;
