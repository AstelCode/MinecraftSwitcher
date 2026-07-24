-- CreateTable
CREATE TABLE "Conflicts" (
    "id" BIGSERIAL NOT NULL,
    "shaderId" BIGINT,
    "modId" BIGINT,
    "conflictModId" BIGINT,

    CONSTRAINT "Conflicts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModDependency" (
    "modId" BIGINT NOT NULL,
    "dependencyId" BIGINT NOT NULL,

    CONSTRAINT "ModDependency_pkey" PRIMARY KEY ("modId","dependencyId")
);

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_conflictModId_fkey" FOREIGN KEY ("conflictModId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModDependency" ADD CONSTRAINT "ModDependency_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModDependency" ADD CONSTRAINT "ModDependency_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Mod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
