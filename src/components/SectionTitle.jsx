import { motion } from "framer-motion";

/**
 * Encabezado de sección reutilizable: eyebrow + título + bajada opcional.
 * Mantiene consistencia tipográfica en todas las páginas.
 */
function SectionTitle({ eyebrow, titulo, bajada, alineado = "izquierda" }) {
  const alineacion =
    alineado === "centro" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col gap-4 ${alineacion}`}
    >
      {eyebrow && <span className="etiqueta-eyebrow">{eyebrow}</span>}
      <h2 className="titulo-display text-3xl font-medium leading-tight md:text-4xl">
        {titulo}
      </h2>
      {bajada && <p className="text-base leading-relaxed text-piedra-500 md:text-lg">{bajada}</p>}
    </motion.div>
  );
}

export default SectionTitle;
