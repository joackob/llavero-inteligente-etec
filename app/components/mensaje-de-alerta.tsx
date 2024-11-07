import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const MensajeDeAlerta = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Ups!</AlertTitle>
      <AlertDescription>
        Tal parece que algo no fue como debia: revisar el console.log de las
        herramientas de desarrollo
      </AlertDescription>
    </Alert>
  );
};

export default MensajeDeAlerta;
