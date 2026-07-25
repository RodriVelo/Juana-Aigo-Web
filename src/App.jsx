import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Research from "./pages/Research.jsx";
import PublicacionesCientificas from "./pages/publicaciones/PubliacionesCientificas.jsx";
import ArticulosDivulgacion from "./pages/publicaciones/ArticulosDivulgacion.jsx";
import InformesTecnicos from "./pages/InformesTecnicos.jsx";

import Extension from "./pages/extension/Extension.jsx";
import ComunidadesMapuches from "./pages/extension/ComunidadesMapuches.jsx";
import OtrasActividades from "./pages/extension/OtrasActividades.jsx";

import CargosGestion from "./pages/gestionDocencia/CargosGestion.jsx";
import OrganizacionEventos from "./pages/gestionDocencia/OrganizacionEventos.jsx"
import GestionEditorial from "./pages/gestionDocencia/GestionEditorial.jsx";
import Docencia from "./pages/gestionDocencia/Docencia.jsx";


import Cientificas from "./pages/divulgacion/Cientificas.jsx";
import Charlas from "./pages/divulgacion/Charlas.jsx";
import Entrevistas from "./pages/divulgacion/Entrevistas.jsx";
import Actividades from "./pages/divulgacion/Actividades.jsx";

import Audiovisuales from "./pages/cruceArteCiencia/Audiovisuales.jsx"
import Podcasts from "./pages/cruceArteCiencia/Podcasts.jsx"

import FormacionRecursosHumanos from "./pages/FormacionRecursosHumanos.jsx";

import Thesis from "./pages/Thesis.jsx";
import Congress from "./pages/Congress.jsx";


// Restablece el scroll al tope cada vez que cambia de ruta
function RestablecerScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <RestablecerScroll />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/investigacion" element={<Research />} />

          <Route path="/publicaciones/cientificas" element={<PublicacionesCientificas />} />
          <Route path="/publicaciones/divulgacion" element={<ArticulosDivulgacion />} />
          <Route path="/informesTecnicos" element={<InformesTecnicos />} />
          <Route path="/congresos" element={<Congress />} />
          
          <Route path="/extension/proyectos" element={<Extension />} />
          <Route path="/extension/comunidadesmapuches" element={<ComunidadesMapuches />} />
          <Route path="/extension/otrasactividades" element={<OtrasActividades />} />
          
          <Route path="/gestionydocencia/cargosygestion" element={<CargosGestion />} />
          <Route path="/gestionydocencia/organizaciondeeventos" element={<OrganizacionEventos />} />
          <Route path="/gestionydocencia/gestioneditorial" element={<GestionEditorial />} />
          <Route path="/gestionydocencia/docencia" element={<Docencia />} />

          <Route path="/divulgacion/cientificas" element={<Cientificas />} />
          <Route path="/divulgacion/charlas" element={<Charlas />} />
          <Route path="/divulgacion/entrevistas" element={<Entrevistas />} />
          <Route path="/divulgacion/actividades" element={<Actividades />} />

          <Route path="/crucearteciencia/audiovisuales" element={<Audiovisuales />} />
          <Route path="/crucearteciencia/podcasts" element={<Podcasts />} />

          <Route path="/tesis" element={<Thesis />} />

          <Route path="/formacionderecursoshumanos" element={<FormacionRecursosHumanos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
