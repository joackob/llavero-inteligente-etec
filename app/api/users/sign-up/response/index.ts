import { Users } from "@prisma/client";

type User = Users;

export const reply = (user: User): Response => {
  return Response.json(
    { name: user.nombre, lastname: user.apellido, email: user.email },
    { status: 201 }
  );
};
