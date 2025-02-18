"use client";

import { useSearch } from "../components/search-context"; // Importa el contexto
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { LogoETEC, BotonParaIniciarSesion } from "./componentes-para-el-encabezado";

export default function EncabezadoCompartidoPorTodoElSitio() {
  const { setSearchTerm } = useSearch(); // Usar el contexto para actualizar el término de búsqueda

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo del sitio */}
        <LogoETEC />

        {/* Barra de búsqueda en el medio */}
        <div className="flex-grow mx-4 max-w-md">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-3 py-1.5 border-2 border-sky-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            onChange={(e) => {
              console.log("Término de búsqueda (Encabezado):", e.target.value); // Depuración
              setSearchTerm(e.target.value); // Actualizar el término de búsqueda
            }}
          />
        </div>

        {/* Botón de Iniciar Sesión */}
        <BotonParaIniciarSesion />
      </div>
    </header>
  );
}