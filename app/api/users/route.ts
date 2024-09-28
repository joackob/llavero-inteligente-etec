export const GET = async () => {
  return Response.json({ nombre: "Juan", apellido: "Perez" }, { status: 200 });
};
