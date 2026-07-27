-- CreateTable
CREATE TABLE "Favorite" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "modId" BIGINT,
    "packId" BIGINT,
    "shaderId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_modId_key" ON "Favorite"("userId", "modId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_packId_key" ON "Favorite"("userId", "packId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_shaderId_key" ON "Favorite"("userId", "shaderId");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;
