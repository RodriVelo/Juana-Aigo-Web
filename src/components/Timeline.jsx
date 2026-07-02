import { motion } from "framer-motion";

/**
 * Línea de tiempo vertical reutilizable.
 * Recibe "eventos": arreglo de objetos con { id, anio, titulo, lugar, descripcion }.
 */
function Timeline({ eventos }) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-bosque-200 pl-8">
      {eventos.map((evento, indice) => (
        <motion.li
          key={evento.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: indice * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full border-2 border-arena-50 bg-bosque-500" />
          <span className="font-mono text-xs uppercase tracking-widest text-bosque-400">
            {evento.anio}
          </span>
          <h3 className="mt-1 font-display text-lg font-medium text-bosque-800">
            {evento.titulo}
          </h3>
          {evento.lugar && (
            <p className="text-sm font-medium text-piedra-500">{evento.lugar}</p>
          )}
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-piedra-500">
            {evento.descripcion}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

export default Timeline;
