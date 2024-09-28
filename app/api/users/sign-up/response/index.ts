import { Usuario } from "@/app/api/types";

export const reply = (usuario: Usuario): Response => {
  return Response.json(
    { name: usuario.nombre, lastname: usuario.apellido, email: usuario.email },
    { status: 201 }
  );
};
