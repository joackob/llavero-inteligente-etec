import { SolicitudMalPlanteada } from "@/app/api/excepciones";
import { z, ZodError } from "zod";

export const obtenerSolicitudValidada = (
  solicitud: any,
): DatosNecesariosParaSolicitarLlaves => {
  try {
    return EsquemaDeUnaSolicitudParaSolicitarLlaves.parse(solicitud);
  } catch (error) {
    const primerErrorEncontrado = (error as ZodError).issues.at(0);
    throw new SolicitudMalPlanteada(
      `El campo ${primerErrorEncontrado?.path.at(
        0,
      )} no se encuentra en el formato correcto: ${
        primerErrorEncontrado?.message
      }`,
    );
  }
};

// debe cambiarse el nombre "aula" por "espacio"
const EsquemaDeUnaSolicitudParaSolicitarLlaves = z.object({
  aula: z.string(),
});

export type DatosNecesariosParaSolicitarLlaves = z.infer<
  typeof EsquemaDeUnaSolicitudParaSolicitarLlaves
>;
