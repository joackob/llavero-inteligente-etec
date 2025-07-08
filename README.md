# Llavero inteligente para ETEC

Sistema para la gestión de llaves de acceso a los distintos espacios de cualquier institución. La misma cuenta con:

- Información sobre la disponibilidad de cada una de las llaves de acceso a los espacios de formación
- Un control de autenticación de usuarios para acceder a información privilegiada
- Un gestor de sesiones para facilitar el acceso al sistema a los usuarios autorizados
- Un gestor de autorizaciones que permite controlar que usuarios pueden realizar operaciones dentro del sistema

En paralelo a este sistema, de anexa una maquina expendedora de llaves, la cual se encarga de

- Resguardar y asegurar las llaves de la institución
- Brindar el acceso a las llaves de acuerdo a las ordenes de la aplicación dirigida a los clientes
- Registrar tanto la extracción como la devolución de llaves en el sistema anexo

## Guía para desarrolladores

### Ejecutar la aplicación en modo desarrollador

La aplicación es construida usando [Next.js](https://nextjs.org/) con [Bun.sh](https://bun.sh/) como entorno de ejecución y pruebas unitarias, y [Playwright.dev](https://playwright.dev/) para pruebas e2e, por lo que la siguiente guía esta orientada a aquellos desarrolladores que conozcan ambas tecnologías.

Para instalar la dependencias del proyecto, ejecutar el comando

```bash
bun install
```

Para inicializar la base de datos desde cero, es importante modificar el archivo `.env.example` de acuerdo a las preferencias de quien desarrolla. En particular, la variable `DATABASE_URL` debe indicar el archivo destino para la base de datos. Una vez modificado el archivo, recomendamos copiarlo en un archivo `.env` y correr el comando

```
bun run init
```

Para ejecutar el servidor de desarrollo, correr el siguiente comando

```bash
bun run dev
```

*Recordar configurar el puerto 3000, tanto en el .env, como en el config.ts

### Ejecución de pruebas

Para ejecutar los pruebas unitarias, correr el siguiente comando

```bash
bun run tests
```

Para ejecutar pruebas e2e, correr el siguiente comando

```bash
bun run tests:e2e
```

### Creación de nuevas pruebas

Las pruebas unitarias comprenden una tarea de cada desarrollador y es responsabilidad de quien construye, crear, ejecutar y resolver las pruebas al interior de sus carpetas. Para dar algunas indicaciones claras

- El nombre de la carpeta donde colocar las pruebas unitarias es `carpeta_de_trabajo/tests` 
- El nombre de los archivos que comprenden a las pruebas unitarias debe respetar el siguiente formato: `<prueba>.test.ts` . 
- Si alguno de estos preceptos no se respeta, la prueba no se ejecutará o al menos no desde los comandos que se indicaron en la sección anterior.

Las pruebas e2e solo deben existir en la carpeta `./tests` con un formato `<prueba>.spect.ts`. 

Es posible crear nuevos escenarios para pruebas, con el servidor de desarrollo en ejecución y el comando

```bash
bun run create:test:e2e
```

#