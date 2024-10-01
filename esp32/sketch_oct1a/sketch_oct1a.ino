#include <WiFi.h>
#include <PubSubClient.h>

// Configura tus credenciales de Wi-Fi
const char* ssid = "ETEC-UBA";
const char* password = "ETEC-alumnos@UBA";

// Configura los parámetros del broker MQTT
const char* mqttServer = "10.9.121.192"; // O tu broker
const int mqttPort = 1883;

// Crea objetos para Wi-Fi y MQTT
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  
  // Conectar a Wi-Fi
  setupWiFi();
  
  // Configurar el servidor MQTT
  client.setServer(mqttServer, mqttPort);
}

void loop() {
  // Reconnect if disconnected
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Publicar un mensaje
  String msg = "Hola desde ESP32";
  if (client.publish("test/topic", msg.c_str())) {
    Serial.println("Mensaje publicado");
  } else {
    Serial.println("Error al publicar el mensaje");
  }

  // Esperar 5 segundos antes de volver a publicar
  delay(5000);
}

void setupWiFi() {
  Serial.print("Conectando a Wi-Fi...");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("\n¡Conectado!");
  Serial.print("Dirección IP: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Intentando conexión MQTT...");
    
    // Intenta conectarte sin usuario y contraseña
    if (client.connect("ESP32Client")) {
      Serial.println("¡Conectado al broker MQTT!");
    } else {
      Serial.print("Falló, rc=");
      Serial.print(client.state());
      Serial.println(" Intentando de nuevo en 5 segundos");
      delay(5000);
    }
  }
}

