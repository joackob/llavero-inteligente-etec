import { autenticarLosDatosDeUnUsuario } from "@/app/api/auth/autenticar";
import { validarLosDatosDeLaSolicitud } from "../parser";
import { crearCreadencialesParaSuSesion } from "@/app/api/auth/crear-credenciales";
import { NextRequest, NextResponse } from "next/server";
import { redirigirConLasCredencialesCorrespondientes } from "./responder-adecuadamente-a-la-solicitud";

export const iniciarLaSesionDeUnUsuario = async (
  solicitud: NextRequest
): Promise<NextResponse> => {
  const datos = validarLosDatosDeLaSolicitud(await solicitud.json());
  const usuario = await autenticarLosDatosDeUnUsuario(datos);
  const credenciales = await crearCreadencialesParaSuSesion(usuario);
  return redirigirConLasCredencialesCorrespondientes(credenciales);
};
