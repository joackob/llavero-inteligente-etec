"use client";
import { useState } from "react";

export const useUser = () => {
  const [iniciado, setSesionIniciada] = useState(false);
  const [usuario, setUsuario] = useState<{
    nombre: string;
    apellido: string;
  }>();

  const iniciarSesion = () => {
    setSesionIniciada(true);
    setUsuario({ nombre: "Juan", apellido: "Pérez" });
  };

  const cerrarSesion = () => {
    setSesionIniciada(false);
  };

  const sesionIniciada = () => iniciado;

  const nombreCompleto = () => `${usuario?.nombre} ${usuario?.apellido}`;

  return {
    iniciarSesion,
    cerrarSesion,
    sesionIniciada,
    nombreCompleto,
  } as const;
};
