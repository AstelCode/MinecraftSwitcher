-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_modId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_packId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_shaderId_fkey";

-- DropForeignKey
ALTER TABLE "Conflicts" DROP CONSTRAINT "Conflicts_conflictModId_fkey";

-- DropForeignKey
ALTER TABLE "Conflicts" DROP CONSTRAINT "Conflicts_conflictshaderId_fkey";

-- DropForeignKey
ALTER TABLE "Conflicts" DROP CONSTRAINT "Conflicts_modId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_modId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_packId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_shaderId_fkey";

-- DropForeignKey
ALTER TABLE "Mod" DROP CONSTRAINT "Mod_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ModDependency" DROP CONSTRAINT "ModDependency_dependencyId_fkey";

-- DropForeignKey
ALTER TABLE "ModDependency" DROP CONSTRAINT "ModDependency_modId_fkey";

-- DropForeignKey
ALTER TABLE "Pack" DROP CONSTRAINT "Pack_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Shader" DROP CONSTRAINT "Shader_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ShaderDependecy" DROP CONSTRAINT "ShaderDependecy_modId_fkey";

-- DropForeignKey
ALTER TABLE "ShaderDependecy" DROP CONSTRAINT "ShaderDependecy_shaderId_fkey";

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shader" ADD CONSTRAINT "Shader_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_conflictshaderId_fkey" FOREIGN KEY ("conflictshaderId") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conflicts" ADD CONSTRAINT "Conflicts_conflictModId_fkey" FOREIGN KEY ("conflictModId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModDependency" ADD CONSTRAINT "ModDependency_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModDependency" ADD CONSTRAINT "ModDependency_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShaderDependecy" ADD CONSTRAINT "ShaderDependecy_shaderId_fkey" FOREIGN KEY ("shaderId") REFERENCES "Shader"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShaderDependecy" ADD CONSTRAINT "ShaderDependecy_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;
