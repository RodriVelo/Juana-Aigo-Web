import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ENLACES_NAVEGACION = [
  { etiqueta: "Sobre mí", ruta: "/sobre-mi" },
  { etiqueta: "Investigación", ruta: "/investigacion" },
  { etiqueta: "Informes Técnicos", ruta: "/informestecnicos" },
  { etiqueta: "Congresos", ruta: "/congresos" },
    {
    etiqueta: "Formación de Recursos Humanos",
    ruta: "/formacionderecursoshumanos",
  },
  {
    etiqueta: "Publicaciones",

    subItems: [
      {
        etiqueta: "Publicaciones Científicas",
        ruta: "/publicaciones/cientificas",
      },
      {
        etiqueta: "Artículos de Divulgación",
        ruta: "/publicaciones/divulgacion",
      },
    ],
  },
  {
    etiqueta: "Extensión",

    subItems: [
      { etiqueta: "Proyectos de Extensión", ruta: "/extension/proyectos" },
      {
        etiqueta: "Trabajos con Comunidades Mapuches",
        ruta: "/extension/comunidadesmapuches",
      },
      { etiqueta: "Otras Actividades", ruta: "/extension/otrasactividades" },
    ],
  },
  {
    etiqueta: "Gestión y Docencia",
    subItems: [
      {
        etiqueta: "Cargos y Gestión",
        ruta: "/gestionydocencia/cargosygestion",
      },
      {
        etiqueta: "Organización de Eventos",
        ruta: "/gestionydocencia/organizaciondeeventos",
      },
      {
        etiqueta: "Gestión Editorial",
        ruta: "/gestionydocencia/gestioneditorial",
      },
      { etiqueta: "Docencia", ruta: "/gestionydocencia/docencia" },
    ],
  },
  {
    etiqueta: "Divulgación",

    subItems: [
      {
        etiqueta: "Divulgaciones Científicas",
        ruta: "/divulgacion/cientificas",
      },
      { etiqueta: "Charlas", ruta: "/divulgacion/charlas" },
      { etiqueta: "Entrevistas", ruta: "/divulgacion/entrevistas" },
      { etiqueta: "Actividades", ruta: "/divulgacion/actividades" },
    ],
  },
  {
    etiqueta: "Cruce Arte-Ciencia",

    subItems: [
      { etiqueta: "Audiovisuales", ruta: "/crucearteciencia/audiovisuales" },
      { etiqueta: "Podcasts", ruta: "/crucearteciencia/podcasts" },
    ],
  },

];

function Navbar() {
  const [conScroll, setConScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [submenuEscritorioAbierto, setSubmenuEscritorioAbierto] =
    useState(null);
  const [submenuMovilAbierto, setSubmenuMovilAbierto] = useState(null);
  const temporizadorCierre = useRef(null);

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

  function abrirSubmenu(etiqueta) {
    if (temporizadorCierre.current) {
      clearTimeout(temporizadorCierre.current);
      temporizadorCierre.current = null;
    }
    setSubmenuEscritorioAbierto(etiqueta);
  }

  function programarCierreSubmenu() {
    temporizadorCierre.current = setTimeout(() => {
      setSubmenuEscritorioAbierto(null);
    }, 150);
  }

  function alternarSubmenuMovil(etiqueta) {
    setSubmenuMovilAbierto((actual) => (actual === etiqueta ? null : etiqueta));
  }

  return (
    <header
      className={`pt-2 fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        conScroll
          ? "bg-arena-50/90 shadow-tarjeta backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="contenedor flex items-center justify-between gap-8 py-5">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-medium tracking-tight"
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

        {/* Navegación de escritorio: se envuelve en dos filas */}
        <ul className="hidden max-w-[820px] flex-wrap items-center justify-end gap-x-7 gap-y-3 lg:flex">
          {ENLACES_NAVEGACION.map((enlace) => (
            <li
              key={enlace.ruta}
              className="relative"
              onMouseEnter={() =>
                enlace.subItems && abrirSubmenu(enlace.etiqueta)
              }
              onMouseLeave={() => enlace.subItems && programarCierreSubmenu()}
            >
              {enlace.subItems ? (
                <button
                  type="button"
                  className={`flex items-center gap-1 whitespace-nowrap text-sm tracking-wide transition-colors duration-200 ${
                    conScroll
                      ? "text-piedra-500 hover:text-bosque-700"
                      : "text-arena-100/80 hover:text-arena-50"
                  }`}
                >
                  {enlace.etiqueta}
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${
                      submenuEscritorioAbierto === enlace.etiqueta
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={enlace.ruta}
                  className={({ isActive }) =>
                    `flex items-center gap-1 whitespace-nowrap text-sm tracking-wide transition-colors duration-200 ${
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
              )}

              {enlace.subItems && (
                <AnimatePresence>
                  {submenuEscritorioAbierto === enlace.etiqueta && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-3 min-w-[250px] rounded-xl border border-piedra-100 bg-arena-50 py-2 shadow-tarjeta"
                    >
                      {enlace.subItems.map((subItem) => (
                        <li key={subItem.ruta}>
                          <NavLink
                            to={subItem.ruta}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm tracking-wide transition-colors duration-200 ${
                                isActive
                                  ? "bg-bosque-50 font-medium text-bosque-700"
                                  : "text-piedra-500 hover:bg-bosque-50 hover:text-bosque-700"
                              }`
                            }
                          >
                            {subItem.etiqueta}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

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
            <ul className="contenedor flex max-h-[75vh] flex-col gap-2 overflow-y-auto py-6">
              {ENLACES_NAVEGACION.map((enlace) => (
                <li key={enlace.ruta}>
                  {enlace.subItems ? (
                    <>
                      <button
                        type="button"
                        onClick={() => alternarSubmenuMovil(enlace.etiqueta)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left text-[15px] text-piedra-500"
                      >
                        {enlace.etiqueta}
                        <ChevronDown
                          size={16}
                          strokeWidth={2}
                          className={`transition-transform duration-200 ${
                            submenuMovilAbierto === enlace.etiqueta
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {submenuMovilAbierto === enlace.etiqueta && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden pl-3"
                          >
                            {enlace.subItems.map((subItem) => (
                              <li key={subItem.ruta}>
                                <NavLink
                                  to={subItem.ruta}
                                  onClick={() => setMenuAbierto(false)}
                                  className={({ isActive }) =>
                                    `block rounded-lg px-3 py-3 text-sm ${
                                      isActive
                                        ? "bg-bosque-50 font-medium text-bosque-700"
                                        : "text-piedra-500"
                                    }`
                                  }
                                >
                                  {subItem.etiqueta}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={enlace.ruta}
                      onClick={() => setMenuAbierto(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-3.5 text-[15px] ${
                          isActive
                            ? "bg-bosque-50 font-medium text-bosque-700"
                            : "text-piedra-500"
                        }`
                      }
                    >
                      {enlace.etiqueta}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
