import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";
import Card from "./Card.jsx";

const ESTILOS_ESTADO = {
  "En curso": "bg-bosque-400/15 text-bosque-500",
  Finalizada: "bg-piedra-400/15 text-piedra-500",
};

/**
 * Tarjeta que representa un proyecto de investigación, con expansión
 * de contenido al presionar "Leer más".
 */
function ResearchCard({ investigacion }) {
  const [expandida, setExpandida] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={investigacion.imagen}
          alt={investigacion.nombre}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="etiqueta-eyebrow">{investigacion.area}</span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              ESTILOS_ESTADO[investigacion.estado]
            }`}
          >
            {investigacion.estado}
          </span>
        </div>

        <h3 className="font-display text-xl font-medium leading-snug text-bosque-800">
          {investigacion.nombre}
        </h3>

        <p className="text-sm leading-relaxed text-piedra-500">
          {investigacion.descripcion}
        </p>

        {expandida && (
          <p className="text-sm leading-relaxed text-piedra-500">
            {investigacion.resumen}
          </p>
        )}

        <button
          type="button"
          onClick={() => setExpandida((valorActual) => !valorActual)}
          className="mt-2 inline-flex items-center gap-2 self-start text-sm font-medium text-bosque-600 transition-colors hover:text-bosque-800"
        >
          {expandida ? "Ver menos" : "Leer más"}
          {expandida ? (
            <ChevronUp size={16} strokeWidth={1.8} />
          ) : (
            <ArrowRight size={16} strokeWidth={1.8} />
          )}
        </button>
      </div>
    </Card>
  );
}

export default ResearchCard;
