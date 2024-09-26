import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image
          src={"https://picsum.photos/300/200?random=" + espacio}
          alt={`Imagen del aula ${espacio}`}
          className="object-cover"
          fill
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-2xl font-bold">{espacio}</span>
          <Badge variant={reservado ? "destructive" : "success"}>
            {reservado ? "Ocupada" : "Disponible"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {reservado ? (
          <div className="text-center">
            <p className="text-sm text-gray-600">Ocupada por:</p>
            <p className="font-semibold">{reservadoPor}</p>
          </div>
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
