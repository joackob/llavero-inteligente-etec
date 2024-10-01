import { ReactNode } from "react";

const TableroDeTarjetasParaAulas = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
};

export default TableroDeTarjetasParaAulas;
