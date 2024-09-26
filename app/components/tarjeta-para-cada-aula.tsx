import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Key, Lock } from "lucide-react";
import Image from "next/image";

const TarjetaParaCadaAula = ({
  espacio,
  reservado,
  reservadoPor,
}: {
  espacio: string;
  reservado: boolean;
  reservadoPor: string;
}) => {
  return (
    <Card className={`${reservado ? "bg-gray-200" : ""}`}>
      <div className="relative h-40">
        <Image
          src={"https://picsum.photos/300/200?random=" + espacio}
          alt={`Imagen del aula ${espacio}`}
          className={`object-cover ${reservado ? "filter grayscale" : ""}`}
          fill
        />
      </div>
      <CardHeader>
        <CardTitle className="text-center text-xl">{espacio}</CardTitle>
        <CardDescription className="text-center">
          {reservado ? (
            <>
              Ocupada por: <span className="font-bold">{reservadoPor}</span>
            </>
          ) : (
            <span>Disponible</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {reservado ? (
          <>
            <p className="text-center text-sm text-gray-600">
              Si querés, podés: <span className="font-bold">llamarle</span> o{" "}
              <span className="font-bold">enviarle un mensaje</span>
            </p>
            <p className="text-center text-sm text-gray-600">
              Pero para eso, necesitas{" "}
              <span className="font-bold">inciar sesión</span>
            </p>
          </>
        ) : (
          <Button className="w-full" disabled={reservado}>
            Solicitar Llave
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TarjetaParaCadaAula;
