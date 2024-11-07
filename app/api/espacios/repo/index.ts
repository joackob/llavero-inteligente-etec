import db from "@/db";
import { Excepcion } from "../../excepciones";

export type InformacionDeLosEspaciosYSuUltimoOcupante = Awaited<
  ReturnType<typeof obtenerInformacionSobreQuienesOcupanLosEspacios>
>;

export const obtenerInformacionSobreQuienesOcupanLosEspacios = async () => {
  try {
    const espacios = await db.llaves.findMany({
      select: {
        id: true,
        espacio: true,
        ocupado: true,
        prestamos: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            usuario: {
              select: { id: true, nombre: true, apellido: true, email: true },
            },
          },
        },
      },
    });

    return espacios.map((espacio) => {
      return {
        id: espacio.id,
        espacio: espacio.espacio,
        ocupado: espacio.ocupado,
        ocupante: espacio.prestamos.at(0)?.usuario,
      };
    });
  } catch (error) {
    throw new Excepcion({
      mensaje: `No se pudo obtener la información de los espacios, error${error}`,
      codigoHttp: 500,
    });
  }
};
