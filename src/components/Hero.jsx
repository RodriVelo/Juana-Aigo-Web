import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Button from "./Button.jsx";
import { perfil } from "../data/perfil.js";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-bosque-800">
      {/* Fotografía de fondo: trabajo de campo en un humedal */}
      <img
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop"
        alt="Humedal patagónico durante una jornada de trabajo de campo"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bosque-900/85 via-bosque-900/40 to-bosque-900/20" />

      {/* Etiqueta tipo ficha de campo, coherente con la identidad naturalista */}
      <div className="absolute right-6 top-24 hidden rounded-full border border-arena-50/25 px-4 py-2 font-mono text-[11px] tracking-widest text-arena-50/70 md:block">
        38°57'S · 68°04'O — PATAGONIA
      </div>

      <div className="contenedor relative z-10 flex flex-col gap-8 pb-24 pt-40">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="etiqueta-eyebrow text-arena-100"
        >
          Bióloga · Investigación y conservación
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-arena-50 md:text-7xl"
        >
          {perfil.nombreCompleto}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl text-lg leading-relaxed text-arena-100/90"
        >
          {perfil.fraseDestacada}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Button variante="primario" enlaceInterno="/sobre-mi" icono={ArrowRight}>
            Conocer más
          </Button>
          <Button variante="claro" enlaceInterno="/contacto" icono={Mail}>
            Contactar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
