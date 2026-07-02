import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BotonWhatsApp from "../components/BotonWhatsApp.jsx";
import BotonVolverArriba from "../components/BotonVolverArriba.jsx";

/**
 * Layout principal que envuelve todas las páginas de la aplicación,
 * evitando repetir Navbar y Footer en cada una de ellas.
 */
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-arena-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BotonWhatsApp />
      <BotonVolverArriba />
    </div>
  );
}

export default MainLayout;
