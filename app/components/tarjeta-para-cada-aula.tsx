import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Key } from "lucide-react";
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
      <CardContent className="flex row justify-stretch space-x-4">
        {reservado ? (
          <>
            <Button className="w-full bg-gray-400" disabled={!reservado}>
              Mandale un mensajito <MessageCircle className="h-4 w-4 ml-2" />
            </Button>
          </>
        ) : (
          <Button className="w-full" disabled={reservado}>
            Solicitar Llave <Key className="h-4 w-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TarjetaParaCadaAula;
