import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

(async () => {
  try {
    const db = new PrismaClient();
    await db.$connect();

    try {
      // Crear aulas
      await db.llaves.createMany({
        data: [
          { espacio: "aula 213" },
          { espacio: "aula 214" },
          { espacio: "aula 314" },
          { espacio: "aula 313" },
          { espacio: "aula 205" },
          { espacio: "aula 204" },
          { espacio: "aula 104" },
          { espacio: "aula 105" },
          { espacio: "aula 301" },
          { espacio: "aula 302" },
          { espacio: "aula 303" },
        ],
      });
      console.log("\nBase de datos de aulas inicializada\n");

      // Crear usuarios (profesores) con correos @etec.uba.ar
      const usuarios = [
        { nombre: "Juan", apellido: "Pérez", email: "juan.perez@etec.uba.ar", password: "juan123" },
        { nombre: "María", apellido: "Gómez", email: "maria.gomez@etec.uba.ar", password: "maria123" },
        { nombre: "Carlos", apellido: "Rodríguez", email: "carlos.rodriguez@etec.uba.ar", password: "carlos123" },
        { nombre: "Ana", apellido: "López", email: "ana.lopez@etec.uba.ar", password: "ana123" },
        { nombre: "Luis", apellido: "Martínez", email: "luis.martinez@etec.uba.ar", password: "luis123" },
        { nombre: "Lucía", apellido: "Fernández", email: "lucia.fernandez@etec.uba.ar", password: "lucia123" },
        { nombre: "Pedro", apellido: "Sánchez", email: "pedro.sanchez@etec.uba.ar", password: "pedro123" },
        { nombre: "Elena", apellido: "García", email: "elena.garcia@etec.uba.ar", password: "elena123" },
        { nombre: "Javier", apellido: "Ramírez", email: "javier.ramirez@etec.uba.ar", password: "javier123" },
        { nombre: "Laura", apellido: "Díaz", email: "laura.diaz@etec.uba.ar", password: "laura123" },
      ];

      const usuariosConPasswordCifrada = await Promise.all(
        usuarios.map(async (usuario) => {
          // Cifrar la contraseña antes de guardarla
          const passwordCifrada = await bcrypt.hash(usuario.password, 10);
          // Devolver el usuario con la contraseña cifrada
          return {
            ...usuario,
            password: passwordCifrada, // Reemplazar la contraseña con la cifrada
          };
        })
      );
  


      // Insertar los usuarios en la base de datos
      await db.usuarios.createMany({
        data: usuariosConPasswordCifrada,
      });

      console.log("\nBase de datos de usuarios inicializada\n");

    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(`\nError conocido: ${error.message}\n`);
      }
      if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        console.error("\nHubo un error desconocido al inicializar la base de datos\n");
      }
    } finally {
      await db.$disconnect();
    }
  } catch (error) {
    console.error("\nError al conectar con la base de datos\n");
    console.table(error)
  } 
})();
