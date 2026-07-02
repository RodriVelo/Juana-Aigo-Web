import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Botón flotante que aparece tras hacer scroll y permite volver al inicio.
 */
function BotonVolverArriba() {
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    function alHacerScroll() {
      setEsVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", alHacerScroll);
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  function volverArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {esVisible && (
        <motion.button
          type="button"
          onClick={volverArriba}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-arena-50 text-bosque-700 shadow-suave transition-transform duration-300 hover:scale-105"
        >
          <ArrowUp size={22} strokeWidth={1.8} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BotonVolverArriba;
