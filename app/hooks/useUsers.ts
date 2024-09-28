export const userActions = () => {
  const usuario = {
    nombre: "Juan",
    apellido: "Pérez",
  };

  const sesionIniciada = () => false;
  const nombreCompleto = () => `${usuario?.nombre} ${usuario?.apellido}`;

  return {
    sesionIniciada,
    nombreCompleto,
  } as const;
};
