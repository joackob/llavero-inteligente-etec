/*
  Warnings:

  - Added the required column `activo` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Llaves" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "espacio" TEXT NOT NULL,
    "ocupada" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Devoluciones" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Devoluciones_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Devoluciones_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prestamos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Prestamos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prestamos_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transferencias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioEmisorId" TEXT NOT NULL,
    "usuarioReceptorId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Transferencias_usuarioEmisorId_fkey" FOREIGN KEY ("usuarioEmisorId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transferencias_usuarioReceptorId_fkey" FOREIGN KEY ("usuarioReceptorId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transferencias_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL
);
INSERT INTO "new_Users" ("createdAt", "email", "id", "lastname", "name", "password", "updatedAt") SELECT "createdAt", "email", "id", "lastname", "name", "password", "updatedAt" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
