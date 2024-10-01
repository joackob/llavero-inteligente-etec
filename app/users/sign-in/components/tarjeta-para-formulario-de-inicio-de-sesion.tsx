import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TarjetaParaFormularioParaInicioDeSesion({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-center mt-[10vh]  bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para acceder al sistema
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta? Contacta al administrador.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
