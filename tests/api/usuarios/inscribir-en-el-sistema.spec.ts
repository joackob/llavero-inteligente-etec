import { test, expect } from "@playwright/test";

test.describe("Como usuario, quiero registrarme en el sistema para poder operar dentro de él", () => {
  test('La api "/api/usuarios/inscribir-en-el-sistema" permite registrar un nuevo usuario en el sistema y debe devolver el código 201', async ({
    request,
  }) => {
    const response = await request.post(
      "/api/usuarios/inscribir-en-el-sistema",
      {
        data: {
          nombre: "Juan",
          apellido: "Perez",
          email: "jperez@etec.uba.ar",
          password: "juanperez1234",
          confirmacion: "juanperez1234",
        },
      }
    );
    expect(response.status()).toBe(201);
  });

  test('La api "/api/usuarios/inscribir-en-el-sistema" permite registrar un nuevo usuario en el sistema y debe devolver el mensaje "Bienvenide, Lucia!"', async ({
    request,
  }) => {
    const response = await request.post(
      "/api/usuarios/inscribir-en-el-sistema",
      {
        data: {
          nombre: "Lucia",
          apellido: "Perez",
          email: "lperez@etec.uba.ar",
          password: "luciaperez1234",
          confirmacion: "luciaperez1234",
        },
      }
    );
    const { mensaje } = await response.json();
    expect(mensaje).toBe("¡Bienvenide, Lucia!");
  });

  test('Si el email ya está registrado, la api "/api/usuarios/inscribir-en-el-sistema" debe devolver el mensaje "el email ya esta en uso"', async ({
    request,
  }) => {
    const response = await request.post(
      "/api/usuarios/inscribir-en-el-sistema",
      {
        data: {
          nombre: "Juan",
          apellido: "Perez",
          email: "docente@etec.uba.ar",
          password: "juanperez1234",
          confirmacion: "juanperez1234",
        },
      }
    );

    const { mensaje } = await response.json();
    expect(mensaje).toBe("El email ya está en uso");
  });
});
