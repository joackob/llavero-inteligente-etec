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
import { config } from "@/config";
const TarjetaParaCadaEspacio = ({
  espacio,
  ocupadoPor,
  ocupado,
  imageUrl,
}: {
  espacio: string;
  ocupadoPor?: string;
  ocupado: boolean;
  imageUrl: string;
}) => {
  const handleClick = (aula: string) => {
    fetch(`${config.BASE_URL}/api/llaves/solicitar`, {
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
    <Card className={`${ocupado ? "bg-gray-200" : ""}`}>
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt={`Imagen del aula ${espacio}`}
          className={`object-cover ${ocupado ? "filter grayscale" : ""}`}
          fill
          priority
          sizes="100%"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-center text-xl">{espacio}</CardTitle>
        <CardDescription className="text-center">
          {ocupado ? `Ocupada por ${ocupadoPor}` : "Disponible"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex row justify-stretch space-x-4">
        {ocupado ? (
          <>
            <Button className="w-full bg-gray-400">
              Mandale un mensajito
              <MessageCircle className="h-4 w-4 ml-2" />
            </Button>
          </>
        ) : (
          <Button
            className="w-full"
            disabled={ocupado}
            onClick={() => handleClick(espacio)}
          >
            Solicitar Llave <Key className="h-4 w-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TarjetaParaCadaEspacio;
