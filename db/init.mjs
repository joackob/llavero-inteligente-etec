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
          {
            espacio: "aula 213",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165636.jpg?alt=media&token=a611e1f8-5580-426d-9233-b53357371ce0",
          },
          {
            espacio: "aula 214",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165710.jpg?alt=media&token=9516ab70-8b15-44c0-a861-dd7195d4024a",
          },
          {
            espacio: "aula 314",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165854.jpg?alt=media&token=6fad63ee-8bad-4e10-a934-2bfbbbd837a6",
          },
          {
            espacio: "aula 313",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165010.jpg?alt=media&token=1549dbf4-e5d4-4c24-97b2-9e58c0e97817",
          },
          {
            espacio: "aula 205",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165425.jpg?alt=media&token=a63fdc49-070d-4591-aebe-89adbdef219c",
          },
          {
            espacio: "aula 204",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 104",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 105",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 301",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 302",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 303",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
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
<<<<<<< HEAD
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(`\nError conocido: ${error.message}\n`);
      }
      if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        console.error("\nHubo un error desconocido al inicializar la base de datos\n");
      }
=======
      console.error("\nError al conectar con la base de datos\n");
      console.error(error);
      /*
      if (error instanceof PrismaClient.PrismaClientKnownRequestError) {
        console.error(`\n${error.message}\n`);
      }
      if (error instanceof PrismaClient.PrismaClientUnknownRequestError) {
        console.error("\nhubo un error al inicializar la base de datos\n");
      }*/
>>>>>>> 7d26efcb34911132f4c2cb757f4767b83bed49f6
    } finally {
      await db.$disconnect();
    }
  } catch (error) {
    console.error("\nError al conectar con la base de datos\n");
<<<<<<< HEAD
    console.table(error)
  } 
=======
    console.error(error);
  }
>>>>>>> 7d26efcb34911132f4c2cb757f4767b83bed49f6
})();
