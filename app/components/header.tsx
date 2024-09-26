"use client";
import { useUser } from "@/app/hooks/useUsers";
import {
  BotonParaCerrarSesion,
  BotonParaIniciarSesion,
  Encabezado,
  InformacionSobreElUsuario,
  LogoETEC,
} from "./header-components";

const Header = () => {
  const usuario = useUser();

  return (
    <Encabezado>
      <LogoETEC />
      {usuario.sesionIniciada() ? (
        <InformacionSobreElUsuario nombre={usuario.nombreCompleto()}>
          <BotonParaCerrarSesion alSerPresionado={usuario.cerrarSesion} />
        </InformacionSobreElUsuario>
      ) : (
        <BotonParaIniciarSesion alSerPresionado={usuario.iniciarSesion} />
      )}
    </Encabezado>
  );
};

export default Header;
