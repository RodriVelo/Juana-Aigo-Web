import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Card from "../components/Card.jsx";
import { perfil } from "../data/perfil.js";

function Contact() {
  const mensajePredefinido = encodeURIComponent(
    "Hola Valentina, encontré tu web y quisiera hacerte una consulta."
  );
  const enlaceWhatsApp = `https://wa.me/${perfil.whatsapp}?text=${mensajePredefinido}`;

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        titulo="Conversemos sobre tu proyecto"
        bajada="Ya sea una colaboración científica, una consultoría o una consulta puntual, con gusto te respondo."
      />

      <section className="contenedor grid gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-8 md:p-10" conAnimacion={false}>
          <h2 className="mb-6 font-display text-2xl font-medium text-bosque-800">
            Enviar un mensaje
          </h2>
          <ContactForm />
        </Card>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5 rounded-xl2 border border-bosque-100 bg-bosque-50 p-8">
            <h3 className="font-display text-xl font-medium text-bosque-800">
              Datos de contacto
            </h3>

            <a href={`mailto:${perfil.correo}`} className="flex items-center gap-3 text-sm text-piedra-500 hover:text-bosque-700">
              <Mail size={18} strokeWidth={1.6} className="text-bosque-500" />
              {perfil.correo}
            </a>

            <a href={`tel:${perfil.telefono}`} className="flex items-center gap-3 text-sm text-piedra-500 hover:text-bosque-700">
              <Phone size={18} strokeWidth={1.6} className="text-bosque-500" />
              {perfil.telefono}
            </a>

            <span className="flex items-center gap-3 text-sm text-piedra-500">
              <MapPin size={18} strokeWidth={1.6} className="text-bosque-500" />
              {perfil.ubicacion}
            </span>

            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-bosque-700 px-6 py-3 text-sm font-medium text-arena-50 transition-colors hover:bg-bosque-800"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              Escribir por WhatsApp
            </a>

            <div className="flex flex-wrap gap-4 border-t border-bosque-200/60 pt-5">
              {perfil.redesSociales.map((red) => (
                <a
                  key={red.nombre}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bosque-600 underline underline-offset-4 hover:text-bosque-800"
                >
                  {red.nombre}
                </a>
              ))}
            </div>
          </div>

          {/* Mapa ilustrativo, sin dependencias externas de mapas */}
          <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl2 border border-bosque-100 bg-bosque-100/50">
            <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full opacity-70">
              <path
                d="M0 180 Q 80 140 160 175 T 400 150"
                fill="none"
                stroke="#9AAE8E"
                strokeWidth="3"
              />
              <path
                d="M0 90 Q 120 60 220 95 T 400 70"
                fill="none"
                stroke="#C3D1BD"
                strokeWidth="2"
              />
              <circle cx="205" cy="128" r="7" fill="#334630" />
              <circle cx="205" cy="128" r="14" fill="#334630" opacity="0.2" />
            </svg>
            <div className="relative flex flex-col items-center gap-1 rounded-xl bg-arena-50/90 px-4 py-3 text-center shadow-tarjeta">
              <MapPin size={18} strokeWidth={1.8} className="text-bosque-600" />
              <span className="text-xs font-medium text-bosque-800">{perfil.ubicacion}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
