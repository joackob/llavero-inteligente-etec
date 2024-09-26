import TarjetaParaCadaAula from "./components/tarjeta-para-cada-aula";

const espacios = [
  { id: 1, name: "Aula 101", image: "https://placehold.co/300x200" },
  { id: 2, name: "Aula 102", image: "https://placehold.co/300x200" },
  { id: 3, name: "Aula 203", image: "https://placehold.co/300x200" },
  { id: 4, name: "Aula 204", image: "https://placehold.co/300x200" },
  { id: 5, name: "Aula 305", image: "https://placehold.co/300x200" },
  { id: 6, name: "Aula 306", image: "https://placehold.co/300x200" },
];

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Disponibilidad de Aulas</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {espacios.map((espacio) => {
          return (
            <TarjetaParaCadaAula
              key={espacio.id}
              espacio={espacio.name}
              reservado={espacio.id % 2 === 0}
              reservadoPor={"Juan Perez"}
            />
          );
        })}
      </div>
    </>
  );
}
