import db from "@/db";

export type InformacionDeLosEspaciosYSuUltimoOcupante = Awaited<
  ReturnType<typeof obtenerInformacionSobreQuienesOcupanLosEspacios>
>;

export const obtenerInformacionSobreQuienesOcupanLosEspacios = async () => {
  const espacios = await db.llaves.findMany({
    select: {
      id: true,
      espacio: true,
      ocupada: true,
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
      ocupada: espacio.ocupada,
      ocupante: espacio.prestamos.at(0)?.usuario,
    };
  });
};
