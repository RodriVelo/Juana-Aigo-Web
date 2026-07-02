import { MessageCircle } from "lucide-react";
import { perfil } from "../data/perfil.js";

/**
 * Botón flotante fijo que enlaza a WhatsApp con un mensaje predefinido.
 */
function BotonWhatsApp() {
  const mensajePredefinido = encodeURIComponent(
    "Hola Valentina, encontré tu web y quisiera hacerte una consulta."
  );
  const enlaceWhatsApp = `https://wa.me/${perfil.whatsapp}?text=${mensajePredefinido}`;

  return (
    <a
      href={enlaceWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-bosque-600 text-arena-50 shadow-suave transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  );
}

export default BotonWhatsApp;
