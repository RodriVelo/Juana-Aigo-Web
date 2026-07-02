import { NavLink } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { perfil } from "../data/perfil.js";

const ENLACES_RAPIDOS = [
  { etiqueta: "Sobre mí", ruta: "/sobre-mi" },
  { etiqueta: "Investigación", ruta: "/investigacion" },
  { etiqueta: "Publicaciones", ruta: "/publicaciones" },
  { etiqueta: "Libros", ruta: "/libros" },
  { etiqueta: "Contacto", ruta: "/contacto" },
];

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="border-t border-bosque-100 bg-bosque-800 text-arena-100">
      <div className="contenedor grid gap-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-display text-lg text-arena-50">
            <Leaf size={20} strokeWidth={1.6} />
            {perfil.nombreCompleto}
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-arena-100/70">
            {perfil.fraseDestacada}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-arena-100/50">
            Navegación
          </h3>
          <ul className="flex flex-col gap-2">
            {ENLACES_RAPIDOS.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink
                  to={enlace.ruta}
                  className="text-sm text-arena-100/80 transition-colors hover:text-arena-50"
                >
                  {enlace.etiqueta}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-arena-100/50">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-arena-100/80">
            <li className="flex items-center gap-2">
              <Mail size={16} strokeWidth={1.6} />
              {perfil.correo}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} strokeWidth={1.6} />
              {perfil.telefono}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} strokeWidth={1.6} />
              {perfil.ubicacion}
            </li>
          </ul>
          <div className="flex gap-4 pt-2">
            {perfil.redesSociales.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-arena-100/70 underline decoration-bosque-400 underline-offset-4 transition-colors hover:text-arena-50"
              >
                {red.nombre}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-bosque-700/60 py-6">
        <p className="contenedor text-center text-xs text-arena-100/50">
          © {anioActual} {perfil.nombreCompleto}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
