"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogIn, User } from "lucide-react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export const Encabezado = ({ children }: { children: ReactNode }) => (
  <header className="bg-white shadow-sm">
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      {children}
    </div>
  </header>
);

export const LogoETEC = () => (
  <a href="/">
    <h1 className="text-2xl">
      <span className="uppercase font-bold">.uba</span>
      <span className="uppercase font-semibold text-sky-600">etec</span>
    </h1>
  </a>
);

export const BotonParaIniciarSesion = () => {
  return (
    <a href="/users/sign-in">
      <Button variant="link">
        <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
      </Button>
    </a>
  );
};

export const BotonParaCerrarSesion = () => {
  return <Button variant="default">Cerrar Sesión</Button>;
};

export const InformacionSobreElUsuario = ({ nombre }: { nombre: string }) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <span className="font-bold text-gray-600">{nombre}</span>
    </div>
  );
};
