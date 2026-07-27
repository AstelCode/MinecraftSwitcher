/*
  Warnings:

  - You are about to drop the column `principalImageId` on the `Mod` table. All the data in the column will be lost.
  - You are about to drop the column `principalImageId` on the `Pack` table. All the data in the column will be lost.
  - You are about to drop the column `principalImageId` on the `Shader` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[packPrincipalId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shaderPrincipalId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[modPrincipalId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Mod" DROP CONSTRAINT "Mod_principalImageId_fkey";

-- DropForeignKey
ALTER TABLE "Pack" DROP CONSTRAINT "Pack_principalImageId_fkey";

-- DropForeignKey
ALTER TABLE "Shader" DROP CONSTRAINT "Shader_principalImageId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_imageId_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "modPrincipalId" BIGINT,
ADD COLUMN     "packPrincipalId" BIGINT,
ADD COLUMN     "shaderPrincipalId" BIGINT,
ADD COLUMN     "userId" BIGINT;

-- AlterTable
ALTER TABLE "Mod" DROP COLUMN "principalImageId";

-- AlterTable
ALTER TABLE "Pack" DROP COLUMN "principalImageId";

-- AlterTable
ALTER TABLE "Shader" DROP COLUMN "principalImageId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageId";

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_packPrincipalId_key" ON "Image"("packPrincipalId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_shaderPrincipalId_key" ON "Image"("shaderPrincipalId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_modPrincipalId_key" ON "Image"("modPrincipalId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_packPrincipalId_fkey" FOREIGN KEY ("packPrincipalId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_shaderPrincipalId_fkey" FOREIGN KEY ("shaderPrincipalId") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_modPrincipalId_fkey" FOREIGN KEY ("modPrincipalId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;
