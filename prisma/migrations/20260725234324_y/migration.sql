/*
  Warnings:

  - Made the column `modId` on table `Conflicts` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `versionType` to the `Mod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `versionType` to the `Pack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `versionType` to the `Shader` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VersionType" AS ENUM ('FORGE', 'OPTIFINE', 'JAVA');

-- DropForeignKey
ALTER TABLE "Conflicts" DROP CONSTRAINT "Conflicts_modId_fkey";

-- AlterTable
ALTER TABLE "Conflicts" ALTER COLUMN "modId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Mod" ADD COLUMN     "versionType" "VersionType" NOT NULL;

-- AlterTable
ALTER TABLE "Pack" ADD COLUMN     "versionType" "VersionType" NOT NULL;

-- AlterTable
ALTER TABLE "Shader" ADD COLUMN     "versionType" "VersionType" NOT NULL;

-- CreateTable
CREATE TABLE "ShaderDependecy" (
    "shaderId" BIGINT NOT NULL,
    "modId" BIGINT NOT NULL,

    CONSTRAINT "ShaderDependecy_pkey" PRIMARY KEY ("shaderId","modId")
);

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShaderDependecy" ADD CONSTRAINT "ShaderDependecy_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShaderDependecy" ADD CONSTRAINT "ShaderDependecy_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
