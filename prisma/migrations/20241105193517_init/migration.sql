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
    CONSTRAINT "Devoluciones_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Devoluciones_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prestamos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "llaveId" TEXT NOT NULL,
    CONSTRAINT "Prestamos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
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
    CONSTRAINT "Transferencias_usuarioEmisorId_fkey" FOREIGN KEY ("usuarioEmisorId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transferencias_usuarioReceptorId_fkey" FOREIGN KEY ("usuarioReceptorId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transferencias_llaveId_fkey" FOREIGN KEY ("llaveId") REFERENCES "Llaves" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_password_key" ON "Usuarios"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Llaves_espacio_key" ON "Llaves"("espacio");
