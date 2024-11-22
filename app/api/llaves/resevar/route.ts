import { NextRequest, NextResponse } from "next/server";
import { reservarLlave } from "./reservar-llave";
export const PUT = async (solicitud: NextRequest): Promise<NextResponse> => {
  const {espacio}= await solicitud.json() 
  reservarLlave(espacio)
  return NextResponse.json({mensaje: "reserve la llave"})
};


//lo que tengo que hacer es lo siguiente: tengo que seguir la logica de intentar solicitar llave,
//osea una vez que le llega al server lo que publico la esp32(el numero de aula que previamente seleccione
//en la pagina web)
//verifico si esta en la base de datos y si esta voy a llamar a la tabla llaves que tiene un campo
//llamado ocupado que es un valor boolean que por defecto tiene false, entonces si dicha llave esta en la base
//de datos cambio ese valor a true