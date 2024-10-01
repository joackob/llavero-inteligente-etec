import { userActions } from "@/app/hooks/useUsers";
import {
  BotonParaCerrarSesion,
  BotonParaIniciarSesion,
  ContenedorDelEncabezado,
  InformacionSobreElUsuario,
  LogoETEC,
} from "./componentes-para-el-encabezado";

const EncabezadoCompartidoPorTodoElSitio = () => {
  const usuario = userActions();

  return (
    <ContenedorDelEncabezado>
      <LogoETEC />
      {usuario.sesionIniciada() ? (
        <>
          <InformacionSobreElUsuario nombre={usuario.nombreCompleto()} />
          <BotonParaCerrarSesion />
        </>
      ) : (
        <BotonParaIniciarSesion />
      )}
    </ContenedorDelEncabezado>
  );
};

export default EncabezadoCompartidoPorTodoElSitio;
