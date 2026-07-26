/*
  Warnings:

  - You are about to drop the column `shaderId` on the `Conflicts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conflicts" DROP CONSTRAINT "Conflicts_shaderId_fkey";

-- AlterTable
ALTER TABLE "Conflicts" DROP COLUMN "shaderId",
ADD COLUMN     "conflictshaderId" BIGINT;

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_conflictshaderId_fkey" FOREIGN KEY ("conflictshaderId") REFERENCES "Shader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
