import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Key, Lock, LogIn, User } from "lucide-react"

const classrooms = [
  { id: 1, name: "Aula 101", available: true, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Aula 102", available: false, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Aula 203", available: true, image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Aula 204", available: true, image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Aula 305", available: false, image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Aula 306", available: true, image: "/placeholder.svg?height=200&width=300" },
]

export default function ClassroomKeyInventory() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Inventario de Llaves de Aulas</h1>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Juan Pérez</span>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@juanperez" />
                <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)}>
              <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
            </Button>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classrooms.map((classroom) => (
            <Card key={classroom.id} className="overflow-hidden">
              <img src={classroom.image} alt={`Imagen del ${classroom.name}`} className="w-full h-40 object-cover" />
              <CardHeader className="bg-gray-50 pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>{classroom.name}</span>
                  <Badge variant={classroom.available ? "success" : "destructive"}>
                    {classroom.available ? "Disponible" : "Ocupada"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-4">
                  {classroom.available ? (
                    <Key className="h-8 w-8 text-green-500" />
                  ) : (
                    <Lock className="h-8 w-8 text-red-500" />
                  )}
                  <span className="text-2xl font-bold">{classroom.name.split(' ')[1]}</span>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                  {classroom.available
                    ? "Llave disponible para recoger"
                    : "Llave actualmente en uso"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}