import { motion } from "framer-motion";

/**
 * Encabezado compacto utilizado en las páginas internas (distinto del Hero
 * de pantalla completa de Inicio), para mantener coherencia visual.
 */
function PageHeader({ eyebrow, titulo, bajada }) {
  return (
    <section className="bg-bosque-800 pb-20 pt-36 md:pt-44">
      <div className="contenedor flex flex-col gap-5">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="etiqueta-eyebrow text-bosque-300"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-2xl font-display text-4xl font-medium text-arena-50 md:text-5xl"
        >
          {titulo}
        </motion.h1>
        {bajada && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-arena-100/75 md:text-lg"
          >
            {bajada}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
