import { NextResponse } from "next/server";

type PropiedadesDeUnaExcepcion = {
  codigoHttp: number;
  mensaje: string;
};

export class Excepcion {
  constructor(protected propiedades: PropiedadesDeUnaExcepcion) {}

  brindarUnaRespuestaAdecuada(): NextResponse {
    return NextResponse.json(
      { mensaje: this.propiedades.mensaje },
      { status: this.propiedades.codigoHttp }
    );
  }
}

export class SolicitudMalPlanteada extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 400,
      mensaje: mensaje,
    });
  }
}

export class SolicitudSinCredencialesCorrespondientes extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 401,
      mensaje: mensaje,
    });
  }
}

export class UsuarioNoRegistrado extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 404,
      mensaje: mensaje,
    });
  }
}

export class ErrorDesconocidoDelServidor extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 500,
      mensaje: mensaje,
    });
  }
}

export class ServicioInhabilitado extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 503,
      mensaje: mensaje,
    });
  }
}

export class BaseDeDatosNoCumplioConLaTareaSolicitada extends Excepcion {
  constructor(mensaje: string) {
    super({
      codigoHttp: 503,
      mensaje: mensaje,
    });
  }
}
