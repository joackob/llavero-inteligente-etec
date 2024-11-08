"use client";
import { ReactNode, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function FormularioParaInicioDeSesion() {
  return (
    <Formulario>
      <Campos />
    </Formulario>
  );
}

const Formulario = ({ children }: { children: ReactNode }) => {
  return (
    <form>
      <div className="space-y-4">{children}</div>
      <Button type="submit" className="w-full mt-6">
        Continuar
      </Button>
    </form>
  );
};

const Campos = () => {
  const [constrasenaEsVisible, setConstrasenaEsVisible] = useState(false);
  const cambiarVisibilidadContrasenia = () =>
    setConstrasenaEsVisible((esVisible) => !esVisible);

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="tu@ejemplo.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <div className="relative">
          <Input
            id="password"
            type={constrasenaEsVisible ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={cambiarVisibilidadContrasenia}
          >
            {constrasenaEsVisible ? (
              <EyeOffIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
            <span className="sr-only">
              {constrasenaEsVisible
                ? "Ocultar contraseña"
                : "Mostrar contraseña"}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
