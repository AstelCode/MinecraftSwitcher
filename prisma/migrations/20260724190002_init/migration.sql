/*
  Warnings:

  - Added the required column `authorId` to the `Pack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pack" ADD COLUMN     "authorId" BIGINT NOT NULL,
ALTER COLUMN "score" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Shader" (
    "id" BIGSERIAL NOT NULL,
    "max_version" INTEGER NOT NULL,
    "min_version" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "score" DOUBLE PRECISION NOT NULL,
    "authorId" BIGINT NOT NULL,

    CONSTRAINT "Shader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PackToShader" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_PackToShader_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PackToShader_B_index" ON "_PackToShader"("B");

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shader" ADD CONSTRAINT "Shader_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackToShader" ADD CONSTRAINT "_PackToShader_A_fkey" FOREIGN KEY ("A") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackToShader" ADD CONSTRAINT "_PackToShader_B_fkey" FOREIGN KEY ("B") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;
