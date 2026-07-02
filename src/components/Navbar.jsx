import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button.jsx";

const ENLACES_NAVEGACION = [
  { etiqueta: "Inicio", ruta: "/" },
  { etiqueta: "Sobre mí", ruta: "/sobre-mi" },
  { etiqueta: "Investigación", ruta: "/investigacion" },
  { etiqueta: "Publicaciones", ruta: "/publicaciones" },
  { etiqueta: "Libros", ruta: "/libros" },
  { etiqueta: "Tesis", ruta: "/tesis" },
  { etiqueta: "Docencia", ruta: "/docencia" },
  { etiqueta: "Congresos", ruta: "/congresos" },
];

function Navbar() {
  const [conScroll, setConScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    function alHacerScroll() {
      setConScroll(window.scrollY > 24);
    }
    window.addEventListener("scroll", alHacerScroll);
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  useEffect(() => {
    setMenuAbierto(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        conScroll
          ? "bg-arena-50/90 shadow-tarjeta backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="contenedor flex h-20 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-lg font-medium tracking-tight"
        >
          <Leaf
            size={22}
            strokeWidth={1.6}
            className={conScroll ? "text-bosque-500" : "text-arena-50"}
          />
          <span className={conScroll ? "text-bosque-800" : "text-arena-50"}>
            Juana Aigo
          </span>
        </NavLink>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-7 lg:flex">
          {ENLACES_NAVEGACION.map((enlace) => (
            <li key={enlace.ruta}>
              <NavLink
                to={enlace.ruta}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors duration-200 ${
                    conScroll
                      ? isActive
                        ? "text-bosque-700 font-medium"
                        : "text-piedra-500 hover:text-bosque-700"
                      : isActive
                      ? "text-arena-50 font-medium"
                      : "text-arena-100/80 hover:text-arena-50"
                  }`
                }
              >
                {enlace.etiqueta}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variante={conScroll ? "primario" : "claro"} enlaceInterno="/contacto">
            Contactar
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuAbierto((valorActual) => !valorActual)}
          className={`lg:hidden ${conScroll ? "text-bosque-800" : "text-arena-50"}`}
        >
          {menuAbierto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-arena-50 shadow-suave lg:hidden"
          >
            <ul className="contenedor flex flex-col gap-1 py-4">
              {ENLACES_NAVEGACION.map((enlace) => (
                <li key={enlace.ruta}>
                  <NavLink
                    to={enlace.ruta}
                    onClick={() => setMenuAbierto(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-sm ${
                        isActive
                          ? "bg-bosque-50 font-medium text-bosque-700"
                          : "text-piedra-500"
                      }`
                    }
                  >
                    {enlace.etiqueta}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  variante="primario"
                  enlaceInterno="/contacto"
                  className="w-full"
                  onClick={() => setMenuAbierto(false)}
                >
                  Contactar
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
