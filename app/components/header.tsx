import { userActions } from "@/app/hooks/useUsers";
import {
  BotonParaCerrarSesion,
  BotonParaIniciarSesion,
  Encabezado,
  InformacionSobreElUsuario,
  LogoETEC,
} from "./header-components";

const Header = () => {
  const usuario = userActions();

  return (
    <Encabezado>
      <LogoETEC />
      {usuario.sesionIniciada() ? (
        <>
          <InformacionSobreElUsuario nombre={usuario.nombreCompleto()} />
          <BotonParaCerrarSesion />
        </>
      ) : (
        <BotonParaIniciarSesion />
      )}
    </Encabezado>
  );
};

export default Header;
