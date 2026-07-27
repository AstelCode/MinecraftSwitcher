-- DropForeignKey
ALTER TABLE "Mod" DROP CONSTRAINT "Mod_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Pack" DROP CONSTRAINT "Pack_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Shader" DROP CONSTRAINT "Shader_authorId_fkey";

-- AlterTable
ALTER TABLE "Mod" ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pack" ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Shader" ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_superadmin" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shader" ADD CONSTRAINT "Shader_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
