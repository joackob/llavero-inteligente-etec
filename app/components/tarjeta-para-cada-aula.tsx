"use client"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";  // Asegúrate de tener tus componentes correctos
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
  const router = useRouter(); // Inicializa el hook del router



  const handleClick = async (aula: string) => {
    console.table(config);
    const res = await fetch(`${config.BASE_URL}/api/llaves/solicitar`, {
      method: "POST", // Cambia a POST si envías un cuerpo
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aula }), // Envía el número de aula
    });

    // Verifica el status de la respuesta
    if (res.status === 401) {
      // Si el status es 401 (No autorizado), redirige al inicio de sesión
      router.push("/usuarios/iniciar-sesion-en-el-sistema"); // Redirige a la página de inicio de sesión
    } 
  };

  return (
    <div>
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
      <h2 className="text-center text-xl">{espacio}</h2>
      <p className="text-center">
        {ocupado ? `Ocupada por ${ocupadoPor}` : "Disponible"}
      </p>
      <div className="flex justify-stretch space-x-4">
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
      </div>
    </div>
  );
};
export default TarjetaParaCadaEspacio;
