//Incluir bibliotecas
#include <WiFi.h>  //
#include <PubSubClient.h>


// crear constantes con valores de configuracion(p. ej. contraseña de WiFi)
const char* WIFI_SSID = "ETEC-UBA";    // SSID( nombre de la red WiFi)
const char* CLAVE = "ETEC-alumnos@UBA";            // Contraseña de wifi
const char* MQTT_BROKER = "10.9.121.240";  // MQTT Broker
const int PUERTO_MQTT = 1883;              //Puerto MQTT
const char* MQTT_TOPIC = "topic-prueba";   //Topic sin "#" y
//crear objetos para gestionar las conexiones

WiFiClient Cliente_esp;
PubSubClient client(Cliente_esp);

// callback sirve para manejar y responder a los mensajes que llegan al dispositivo desde un servidor MQTT (el broker)
//Y ESTE BLOQUE DE CODIGO SE EJECUTA CUANDO LA PLACA RESIVE UN MSJ POR MQTT
void callback(char* topic, byte* message, unsigned int length) {
 // Imprimir el mensaje recibido en el topic
 Serial.print("Mensaje recibido en el topic: ");
 Serial.print(topic);
 Serial.print(".Mensaje: ");
 // Crear una cadena de caracteres (String) para almacenar el mensaje
 String mensaje;




 // Recorrer cada byte del mensaje recibido
 for (int i = 0; i < length; i++) {
   // Imprimir cada caracter del mensaje en el monitor serial
   Serial.print((char)message[i]);
   // Concatenar cada caracter al mensaje String
   mensaje += (char)message[i];
 }


 // Imprimir un salto de línea para separar el mensaje recibido
 Serial.println();


}
void setup() {
 //  Iniciar puerto serie (para enviar mensajes informando el estado de la conexión de WiFi, los mensajes que recibimos por MQTT, etc.)
 Serial.begin(115200);
 WiFi.begin(WIFI_SSID, CLAVE);
 Serial.print("Intentando conectar a wifi");




 while (WiFi.status() != WL_CONNECTED) {
   Serial.print(".");
   delay(500);
 }
 Serial.println("Ya se conecto a WiFi");
 Serial.println(WiFi.localIP());




 client.setServer(MQTT_BROKER, PUERTO_MQTT);
 // ACA LE DIGO QUIEN ERA EL CALLBACK
 client.setCallback(callback);


 // Conectarse al broker MQTT
 while (!client.connected()) {
   Serial.println("conectando a MQTT...");
   if (client.connect("ESP32Client")) {
     Serial.println("conectado");
     client.subscribe(MQTT_TOPIC);                   // me suscribo al topic
     client.publish(MQTT_TOPIC, "ESP32 conectado");  // publicando mensaje de prueba en el topic


   } else {
     Serial.print("Fallo en el estado");
     Serial.print(client.state());
     delay(2000);
   }
 }
}
void loop() 
{
 client.loop();
}
