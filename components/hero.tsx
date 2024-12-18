import { MachineCard } from '@/components/ui/machine-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building2, Mail, Phone, Truck } from 'lucide-react';
import { machines } from '@/data/machines';
import { useState } from 'react';
import { getHomeInfo } from '@/components/getHomeInfo'

export const Hero = async () => {

  // BORRAR
  console.log("iwi")
  getHomeInfo()
  console.log("iwi")
  // BORRAR

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleQuote = (machineId: number) => {
    console.log(`Solicitud de cotización para máquina ID: ${machineId}`);
  };
    return(
        <main className="min-h-screen">
        {/* Hero Section - Reduced height with background image */}
        <section className="relative h-[70vh] bg-cover bg-center" 
                 style={{ backgroundImage: 'url(https://constructor.lacuarta.com/wp-content/uploads/2022/07/Maquinaria-pesada-retroexcavadora.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/90 to-[#1e293b]/70" />
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Maquinaria Pesada de Primera Calidad
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200">
                Soluciones en venta y arriendo de maquinaria
              </p>
              <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                Conoce Nuestros Equipos
              </Button>
            </div>
          </div>
        </section>

        {/* Machinery Carousel Section - Expanded */}
        <section className="py-24 bg-[#f8fafc]" id="rental">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1e293b]">
              Arriendo de Maquinas
            </h2>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {machines.map((machine) => (
                  <CarouselItem key={machine.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <MachineCard
                        {...machine}
                        onQuote={() => handleQuote(machine.id)}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-white" id="about">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#1e293b]">
              Quiénes Somos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-[#f97316]" />
                <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">Experiencia</h3>
                <p className="text-[#64748b]">
                  Más de 15 años en el mercado brindando soluciones de maquinaria
                  pesada
                </p>
              </div>
              <div className="text-center p-6">
                <Truck className="w-12 h-12 mx-auto mb-4 text-[#f97316]" />
                <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">Flota Moderna</h3>
                <p className="text-[#64748b]">
                  Equipos de última generación con mantenimiento preventivo
                  regular
                </p>
              </div>
              <div className="text-center p-6">
                <Phone className="w-12 h-12 mx-auto mb-4 text-[#f97316]" />
                <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">Soporte 24/7</h3>
                <p className="text-[#64748b]">
                  Asistencia técnica y atención al cliente disponible todo el
                  tiempo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-[#f8fafc]" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#1e293b]">Contáctanos</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#f97316]" />
                  <div>
                    <h3 className="font-semibold text-[#1e293b]">Teléfono</h3>
                    <p className="text-[#64748b]">+56 2 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#f97316]" />
                  <div>
                    <h3 className="font-semibold text-[#1e293b]">Email</h3>
                    <p className="text-[#64748b]">contacto@maquirent.com</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-[#1e293b]">Nombre</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-[#1e293b]">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-[#1e293b]">Teléfono</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#1e293b]">Mensaje</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    required
                    className="border-[#cbd5e1] focus:border-[#f97316] focus:ring-[#f97316]"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

    )
}