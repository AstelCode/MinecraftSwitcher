/*
  Warnings:

  - Added the required column `basePath` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "basePath" TEXT NOT NULL;
