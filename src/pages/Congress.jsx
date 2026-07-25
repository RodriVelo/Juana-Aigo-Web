import { CalendarDays, Users } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import { congresos } from "../data/congresos.js";

function Congress() {
  return (
    <>
      <PageHeader
        eyebrow="Congresos"
        titulo="Congresos y participaciones académicas"
        bajada="Presentaciones en congresos, jornadas, conferencias y simposios científicos."
      />

      <section className="contenedor py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {congresos.map((congreso) => (
            <Card key={congreso.id} className="flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="etiqueta-eyebrow text-xs">{congreso.congreso}</span>
                <span className="rounded-full bg-bosque-50 px-2.5 py-0.5 text-[11px] font-medium text-bosque-600">
                  {congreso.rol}
                </span>
              </div>

              <h3 className="font-display text-base font-medium leading-snug text-bosque-800">
                {congreso.titulo}
              </h3>

              <div className="flex flex-wrap gap-3 text-xs text-piedra-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} strokeWidth={1.6} />
                  {congreso.anio}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} strokeWidth={1.6} />
                  <span className="line-clamp-1">{congreso.autores.join(", ")}</span>
                </span>
              </div>

              <p className="line-clamp-2 text-xs leading-relaxed text-piedra-500">
                {congreso.resumen}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Congress;