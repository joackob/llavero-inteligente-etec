/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Users_password_key";

-- DropIndex
DROP INDEX "Users_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Devoluciones" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Devoluciones_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Devoluciones_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Devoluciones" ("createdAt", "id", "llaveId", "updatedAt", "usuarioId") SELECT "createdAt", "id", "llaveId", "updatedAt", "usuarioId" FROM "Devoluciones";
DROP TABLE "Devoluciones";
ALTER TABLE "new_Devoluciones" RENAME TO "Devoluciones";
CREATE TABLE "new_Prestamos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Prestamos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prestamos_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Prestamos" ("createdAt", "id", "llaveId", "updatedAt", "usuarioId") SELECT "createdAt", "id", "llaveId", "updatedAt", "usuarioId" FROM "Prestamos";
DROP TABLE "Prestamos";
ALTER TABLE "new_Prestamos" RENAME TO "Prestamos";
CREATE TABLE "new_Transferencias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioEmisorId" TEXT NOT NULL,
    "usuarioReceptorId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Transferencias_usuarioEmisorId_fkey" FOREIGN KEY ("usuarioEmisorId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transferencias_usuarioReceptorId_fkey" FOREIGN KEY ("usuarioReceptorId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transferencias_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transferencias" ("createdAt", "id", "llaveId", "updatedAt", "usuarioEmisorId", "usuarioReceptorId") SELECT "createdAt", "id", "llaveId", "updatedAt", "usuarioEmisorId", "usuarioReceptorId" FROM "Transferencias";
DROP TABLE "Transferencias";
ALTER TABLE "new_Transferencias" RENAME TO "Transferencias";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_password_key" ON "Usuarios"("password");
