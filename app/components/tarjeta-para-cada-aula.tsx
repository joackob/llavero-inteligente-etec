import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Key } from "lucide-react";
import Image from "next/image";
import { config } from "@/config"
const TarjetaParaCadaAula = ({
  espacio,
  ocupadaPor,
  ocupada,
}: {
  espacio: string;
  ocupadaPor: string;
  ocupada: boolean;
}) => {
  const handleClick = (aula: string) => {
    fetch(`${config.baseUrl}/api/llaves`, {
      method: "POST", // Cambia a POST si envías un cuerpo
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aula }), // Envía el número de aula
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Manejar la respuesta
      })
      .catch((error) => {
        console.error("Error al enviar el número de aula:", error);
      });
  };

  return (
    <Card className={`${ocupada ? "bg-gray-200" : ""}`}>
      <div className="relative h-40">
        <Image
          src={"https://picsum.photos/300/200?random=" + espacio}
          alt={`Imagen del aula ${espacio}`}
          className={`object-cover ${ocupada ? "filter grayscale" : ""}`}
          fill
        />
      </div>
      <CardHeader>
        <CardTitle className="text-center text-xl">{espacio}</CardTitle>
        <CardDescription className="text-center">
          {ocupada ? `Ocupada por ${ocupadaPor}` : "Disponible"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex row justify-stretch space-x-4">
        {ocupada ? (
          <>
            <Button className="w-full bg-gray-400" disabled={!ocupada}>
              Mandale un mensajito
              <MessageCircle className="h-4 w-4 ml-2" />
            </Button>
          </>
        ) : (
          <Button
            className="w-full"
            disabled={ocupada}
            onClick={() => handleClick(espacio)}
          >
            Solicitar Llave <Key className="h-4 w-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TarjetaParaCadaAula;
