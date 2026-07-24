/*
  Warnings:

  - You are about to drop the column `max_version` on the `Shader` table. All the data in the column will be lost.
  - You are about to drop the column `min_version` on the `Shader` table. All the data in the column will be lost.
  - Added the required column `url` to the `Shader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Shader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shader" DROP COLUMN "max_version",
DROP COLUMN "min_version",
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Mod" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "min_version" INTEGER NOT NULL,
    "max_version" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "authorId" BIGINT NOT NULL,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" BIGINT NOT NULL,
    "packId" BIGINT,
    "shaderId" BIGINT,
    "modId" BIGINT,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" BIGSERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "modId" BIGINT,
    "shaderId" BIGINT,
    "packId" BIGINT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ModToPack" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_ModToPack_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ModToPack_B_index" ON "_ModToPack"("B");

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModToPack" ADD CONSTRAINT "_ModToPack_A_fkey" FOREIGN KEY ("A") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModToPack" ADD CONSTRAINT "_ModToPack_B_fkey" FOREIGN KEY ("B") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
