import { motion } from "framer-motion";

/**
 * Contenedor base tipo tarjeta, usado como fundamento visual
 * para PublicationCard, BookCard, ResearchCard, etc.
 */
function Card({ children, className = "", conAnimacion = true }) {
  const clasesTarjeta = `rounded-xl2 border border-bosque-100 bg-arena-50 shadow-tarjeta transition-shadow duration-300 hover:shadow-suave ${className}`;

  if (!conAnimacion) {
    return <div className={clasesTarjeta}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clasesTarjeta}
    >
      {children}
    </motion.div>
  );
}

export default Card;
