//Incluye bibliotecas
#include <Arduino.h>
#include <LiquidCrystal_I2C.h>

//Incluye funciones ¿?
#include "conexion_mqtt.h"
#include "conexion_wifi.h"
#include "indicador_led.h"
#include "logger.h"
#include "motor_del_plato_principal.h"
#include "lector_RFID.h"
#include "lcd.h"
#include "pruebas.h"

//Define el modo en el que ¿?
#define MODO "testing"

//Supongo que define funciones las cuales despues les asigna una funcion ya creada
ConexionMQTT conexion_mqtt;
ConexionWiFi conexion_wifi;
IndicadorLed indicador_led;
Logger logger;
MotorDelPlatoPrincipal motor;
lector_RFID lector_rfid;
LCD Lcd;


//Define funciones ¿? 
void informarAlUsuarioLaRecepcionDeUnMensajePorMQTT(MensajeMQTT mensaje);
void informarAlUsuarioElEstadoDeLaConexionWiFi(
    InformacionSobreElEstadoDeLaConexionWiFi);
void informarAlUsuarioElEstadoDeLaConexionAlBroker(
    InformacionSobreElEstadoDeLaConexionMQTT);
    
    void setup()
{
  //SetUp por lo que yo entiendo esta definiendo las configuraciones de cada funcionalidad ¿?  
  Serial.begin(115200);
  Serial.println(F("Llavero ETEC-UBA"));
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
  lector_rfid.configurar();
  lector_rfid.iniciar();
  Lcd.iniciar();
  motor.configurarMotorAzul();
  motor.configurarMotorVerde();
  motor.configurarMotorNaranja();
}

//En el loop unicamente intenta conectarse al mqtt
void loop()
{
  conexion_mqtt.intentarConectarseAlBroker();
}

//Crea una funcion para informar el estado de una conexion a WIFI la cual la recibe como parametro y 
//Despues informa el estado del logger y si no se puede conseguir ninguna informacion hace parapadear la led
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

//Crea una funcion para informar el estado de una conexion a WIFI la cual la recibe como parametro y 
//Despues informa el estado del logger -> Si funciona ENCIENDE LA LUZ, sino la hace parpadear
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

//Crea una funcion para que muestre algun mensaje recibido al topic de MQTT
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
