import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogIn, User } from "lucide-react";
import { ReactNode } from "react";

export const Encabezado = ({ children }: { children: ReactNode }) => (
  <header className="bg-white shadow-sm">
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      {children}
    </div>
  </header>
);

export const LogoETEC = () => (
  <h1 className="text-2xl font-bold text-gray-900">logo etec uba</h1>
);

type EventoAlSerPresionado = () => void;

export const BotonParaIniciarSesion = ({
  alSerPresionado,
}: {
  alSerPresionado: EventoAlSerPresionado;
}) => (
  <Button onClick={() => alSerPresionado()}>
    <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
  </Button>
);

export const BotonParaCerrarSesion = ({
  alSerPresionado,
}: {
  alSerPresionado: EventoAlSerPresionado;
}) => (
  <Button variant="outline" onClick={() => alSerPresionado()}>
    Cerrar Sesión
  </Button>
);

export const InformacionSobreElUsuario = ({
  nombre,
  children,
}: {
  nombre: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-700">{nombre}</span>
      <Avatar>
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      {children}
    </div>
  );
};
