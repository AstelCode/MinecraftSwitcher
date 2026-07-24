-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "recovery_key" TEXT,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" BIGSERIAL NOT NULL,
    "max_version" INTEGER NOT NULL,
    "min_version" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);
