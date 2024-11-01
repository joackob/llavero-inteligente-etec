import db from "@/db"

(async () => {
    try {
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
            ]
        })
    } catch (error) { console.log("hubo un error al inicializar la base de datos") }


})()