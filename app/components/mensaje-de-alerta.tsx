import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const MensajeDeAlerta = ({ mensaje }: { mensaje?: string }) => {
  const mensajePorDefecto =
    " Tal parece que algo no fue como debia: revisar el console.log de las herramientas de desarrollo ";
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Ups!</AlertTitle>
      <AlertDescription>{mensaje || mensajePorDefecto}</AlertDescription>
    </Alert>
  );
};

export default MensajeDeAlerta;
