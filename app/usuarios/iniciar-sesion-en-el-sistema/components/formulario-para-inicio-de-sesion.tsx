"use client";
import { ChangeEventHandler, FormEvent, FormEventHandler, ReactNode, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function FormularioParaInicioDeSesion() {
  const [creadenciales, setCredenciales] = useState<{ email: string, contrasena: string }>({
    email: "",
    contrasena: "",
  })
  const enviarCredenciales: FormEventHandler = (evento) => {
    evento.preventDefault();
    console.table(creadenciales);
  };
  const capturarUsuario: ChangeEventHandler<HTMLInputElement> = (evento) => {
    setCredenciales((credenciales) => ({
      ...credenciales,
      contrasena: evento.target.value,
    }));
  }
  const capturarContraseña: ChangeEventHandler<HTMLInputElement> = (evento) => {
    setCredenciales((credenciales) => ({
      ...credenciales,
      email: evento.target.value,
    }));
  }



  return (
    <Formulario alCompletar={enviarCredenciales}>
         <Campos
        alCambiarEmail={capturarUsuario}
        alCambiarContrasena={capturarContraseña}
        credenciales={creadenciales}
      />  
    </Formulario>
  );
}

const Formulario = ({ children,alCompletar}: { children: ReactNode, alCompletar: FormEventHandler }) => {
  return (
    <form onSubmit={alCompletar}>
      <div className="space-y-4">{children}</div>
      <Button type="submit" className="w-full mt-6">
        Continuar
      </Button>
    </form>
  );
};
const Campos = ({alCambiarEmail,alCambiarContrasena,credenciales,}: {
  alCambiarEmail: ChangeEventHandler<HTMLInputElement>;
  alCambiarContrasena: ChangeEventHandler<HTMLInputElement>;
  credenciales: { email: string; contrasena: string };
}) => {
  const [contrasenaEsVisible, setContrasenaEsVisible] = useState(false);

  // Función para cambiar la visibilidad de la contraseña
  const cambiarVisibilidadContrasenia = () =>
    setContrasenaEsVisible((esVisible) => !esVisible);

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
          onChange={alCambiarEmail}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <div className="relative">
          <Input
            id="password"
            type={contrasenaEsVisible ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            required
            onChange={alCambiarContrasena}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={cambiarVisibilidadContrasenia}
          >
            {contrasenaEsVisible ? (
              <EyeOffIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
            <span className="sr-only">
              {contrasenaEsVisible
                ? "Ocultar contraseña"
                : "Mostrar contraseña"}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}; 
 