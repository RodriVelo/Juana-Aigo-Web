import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Research from "./pages/Research.jsx";
import Publications from "./pages/Publications.jsx";
import Books from "./pages/Books.jsx";
import Thesis from "./pages/Thesis.jsx";
import Teaching from "./pages/Teaching.jsx";
import Congress from "./pages/Congress.jsx";
import Contact from "./pages/Contact.jsx";

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
          <Route path="/publicaciones" element={<Publications />} />
          <Route path="/libros" element={<Books />} />
          <Route path="/tesis" element={<Thesis />} />
          <Route path="/docencia" element={<Teaching />} />
          <Route path="/congresos" element={<Congress />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
