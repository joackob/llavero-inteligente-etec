import db from "@/db"

export const reservarLlave = async(espacio:string) => {
    try {
        await db.llaves.update({
            where: {
              espacio: espacio,
            },
            data: {
              ocupada: true,
            },
          })
    } catch (error) {
        console.log("no se reservo la llave")
    }
   
}