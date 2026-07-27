/*
  Warnings:

  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Mod` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Pack` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Shader` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Shader` table. All the data in the column will be lost.
  - Added the required column `src` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src` to the `Mod` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Mod` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `src` to the `Shader` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Shader` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "url",
ADD COLUMN     "src" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Mod" DROP COLUMN "url",
ADD COLUMN     "principalImageId" BIGINT,
ADD COLUMN     "src" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Pack" DROP COLUMN "score",
ADD COLUMN     "principalImageId" BIGINT;

-- AlterTable
ALTER TABLE "Shader" DROP COLUMN "score",
DROP COLUMN "url",
ADD COLUMN     "principalImageId" BIGINT,
ADD COLUMN     "src" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_principalImageId_fkey" FOREIGN KEY ("principalImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shader" ADD CONSTRAINT "Shader_principalImageId_fkey" FOREIGN KEY ("principalImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_principalImageId_fkey" FOREIGN KEY ("principalImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
