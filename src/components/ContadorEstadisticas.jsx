import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Muestra una grilla de estadísticas con animación de conteo ascendente,
 * disparada la primera vez que la sección entra en el viewport.
 */
function ContadorEstadisticas({ estadisticas }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {estadisticas.map((estadistica) => (
        <ValorAnimado key={estadistica.etiqueta} estadistica={estadistica} />
      ))}
    </div>
  );
}

function ValorAnimado({ estadistica }) {
  const referenciaElemento = useRef(null);
  const estaVisible = useInView(referenciaElemento, { once: true, margin: "-40px" });
  const [valorActual, setValorActual] = useState(0);

  useEffect(() => {
    if (!estaVisible) return;

    const duracionMs = 1200;
    const cuadrosPorSegundo = 30;
    const totalCuadros = Math.round((duracionMs / 1000) * cuadrosPorSegundo);
    let cuadroActual = 0;

    const intervalo = setInterval(() => {
      cuadroActual += 1;
      const progreso = cuadroActual / totalCuadros;
      setValorActual(Math.round(estadistica.valor * Math.min(progreso, 1)));

      if (cuadroActual >= totalCuadros) {
        clearInterval(intervalo);
      }
    }, duracionMs / totalCuadros);

    return () => clearInterval(intervalo);
  }, [estaVisible, estadistica.valor]);

  return (
    <motion.div
      ref={referenciaElemento}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-1 border-l border-bosque-200 pl-5"
    >
      <span className="font-display text-4xl font-medium text-bosque-800 md:text-5xl">
        {valorActual}
        {estadistica.sufijo}
      </span>
      <span className="text-sm text-piedra-500">{estadistica.etiqueta}</span>
    </motion.div>
  );
}

export default ContadorEstadisticas;
