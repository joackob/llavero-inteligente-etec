#include <Arduino.h>

#include "conexion_mqtt.h"
#include "conexion_wifi.h"
#include "indicador_led.h"
#include "logger.h"
#include "motor_del_plato_principal.h"
#include "lector_RFID.h"
#define MODO "testing"

ConexionMQTT conexion_mqtt;
ConexionWiFi conexion_wifi;
IndicadorLed indicador_led;
Logger logger;
MotorDelPlatoPrincipal motor;
lector_RFID lector_rfid;

void informarAlUsuarioLaRecepcionDeUnMensajePorMQTT(MensajeMQTT mensaje);
void informarAlUsuarioElEstadoDeLaConexionWiFi(
    InformacionSobreElEstadoDeLaConexionWiFi);
void informarAlUsuarioElEstadoDeLaConexionAlBroker(
    InformacionSobreElEstadoDeLaConexionMQTT);

void setup()
{

  logger.configurar();
  indicador_led.configurar();
  conexion_wifi.alIntentarConectarse(informarAlUsuarioElEstadoDeLaConexionWiFi)
      .alConectarse(informarAlUsuarioElEstadoDeLaConexionWiFi)
      .intentarConectarseALaRed();

  conexion_mqtt.alConectarse(informarAlUsuarioElEstadoDeLaConexionAlBroker)
      .alDesconectarse(informarAlUsuarioElEstadoDeLaConexionAlBroker)
      .alRecibirUnMensaje(informarAlUsuarioLaRecepcionDeUnMensajePorMQTT)
      .enlazarConConexionWiFi(conexion_wifi)
      .configurar();

  motor.configurarMotorAzul();
  motor.configurarMotorVerde();
  motor.configurarMotorNaranja();

  lector_rfid.configurar();
}

void loop() { conexion_mqtt.intentarConectarseAlBroker(); }

void informarAlUsuarioElEstadoDeLaConexionWiFi(
    InformacionSobreElEstadoDeLaConexionWiFi info)
{
  const char *estado = info.conectado ? " Conectado a la red: "
                                      : "Intentando conectarse a la red WiFi: ";
  logger.informar(estado).agregar(info.ssid).concluir();
  if (!info.conectado)
  {
    indicador_led.parpadear();
  }
}

void informarAlUsuarioElEstadoDeLaConexionAlBroker(
    InformacionSobreElEstadoDeLaConexionMQTT info)
{
  const char *estado = info.conectado ? "Conectado al broker MQTT"
                                      : "Intentando conectarse al broker MQTT";
  logger.informar(estado).concluir();
  if (!info.conectado)
  {
    indicador_led.parpadear();
  }
  else
  {
    indicador_led.prender();
  }
}

void informarAlUsuarioLaRecepcionDeUnMensajePorMQTT(MensajeMQTT mensaje)
{
  logger.informar("Mensaje recibido.")
      .agregar(" Topico: ")
      .agregar(mensaje.topic)
      .agregar(";")
      .agregar(" Contenido: ")
      .agregar(mensaje.contenido)
      .concluir();
}
