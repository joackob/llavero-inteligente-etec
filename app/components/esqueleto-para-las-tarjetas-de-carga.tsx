import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Key } from "lucide-react";

const EsqueletoParaLasTarjetasDeCarga = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((key) => (
        <Card key={key} className="">
          <div className="animate-pulse">
            <div className="h-40 bg-gray-200 rounded"></div>

            <CardHeader>
              <CardTitle className="text-center text-xl">Espacio</CardTitle>
              <CardDescription className="text-center">
                Cargando
              </CardDescription>
            </CardHeader>

            <CardContent className="flex row justify-stretch space-x-4">
              <Button className="w-full" disabled>
                Cargando
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EsqueletoParaLasTarjetasDeCarga;
