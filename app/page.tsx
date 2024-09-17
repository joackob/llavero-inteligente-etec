import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Key, Lock, LogIn, User } from "lucide-react"
import { format } from 'date-fns'

// Simulated data
const initialClassrooms = [
  { id: 1, name: "Aula 101", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Aula 102", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Aula 203", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Aula 204", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Aula 305", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Aula 306", image: "/placeholder.svg?height=200&width=300" },
]

const users = [
  { id: 1, name: "Juan Pérez", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "María García", avatar: "/placeholder.svg?height=32&width=32" },
]

export default function ClassroomKeyInventory() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [classrooms, setClassrooms] = useState(initialClassrooms)
  const [bookings, setBookings] = useState({})

  useEffect(() => {
    // Simulated API call to get bookings
    const fetchBookings = async () => {
      // In a real app, this would be an API call
      const simulatedBookings = {
        [format(new Date(), 'yyyy-MM-dd')]: {
          1: { userId: 1, userName: "Juan Pérez" },
          3: { userId: 2, userName: "María García" },
        }
      }
      setBookings(simulatedBookings)
    }
    fetchBookings()
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentUser(users[0]) // Simulating login as the first user
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  const handleBookClassroom = (classroomId) => {
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para reservar un aula.")
      return
    }

    const newBookings = { ...bookings }
    const dateKey = format(new Date(), 'yyyy-MM-dd')
    if (!newBookings[dateKey]) {
      newBookings[dateKey] = {}
    }
    newBookings[dateKey][classroomId] = { userId: currentUser.id, userName: currentUser.name }
    setBookings(newBookings)
  }

  const isClassroomBooked = (classroomId) => {
    const dateKey = format(new Date(), 'yyyy-MM-dd')
    return bookings[dateKey] && bookings[dateKey][classroomId]
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Inventario de Llaves de Aulas</h1>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{currentUser.name}</span>
              <Avatar>
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
              </Avatar>
              <Button variant="outline" onClick={handleLogout}>Cerrar Sesión</Button>
            </div>
          ) : (
            <Button onClick={handleLogin}>
              <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
            </Button>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Disponibilidad de Aulas</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classrooms.map((classroom) => {
            const isBooked = isClassroomBooked(classroom.id)
            const bookedBy = isBooked ? bookings[format(new Date(), 'yyyy-MM-dd')][classroom.id] : null
            return (
              <Card key={classroom.id} className="overflow-hidden">
                <img src={classroom.image} alt={`Imagen del ${classroom.name}`} className="w-full h-40 object-cover" />
                <CardHeader className="bg-gray-50 pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <span>{classroom.name}</span>
                    <Badge variant={isBooked ? "destructive" : "success"}>
                      {isBooked ? "Ocupada" : "Disponible"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-4">
                    {isBooked ? (
                      <Lock className="h-8 w-8 text-red-500" />
                    ) : (
                      <Key className="h-8 w-8 text-green-500" />
                    )}
                    <span className="text-2xl font-bold">{classroom.name.split(' ')[1]}</span>
                  </div>
                  {isBooked ? (
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">Ocupada por:</p>
                      <p className="font-semibold">{bookedBy.userName}</p>
                    </div>
                  ) : (
                    <Button 
                      className="mt-4 w-full" 
                      onClick={() => handleBookClassroom(classroom.id)}
                      disabled={!isLoggedIn}
                    >
                      Solicitar Llave
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}