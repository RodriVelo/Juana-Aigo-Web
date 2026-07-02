import { CalendarDays, MapPin } from "lucide-react";
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
        <div className="grid gap-8 md:grid-cols-2">
          {congresos.map((congreso) => (
            <Card key={congreso.id} className="flex flex-col gap-4 p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="etiqueta-eyebrow">{congreso.tipo}</span>
                <span className="rounded-full bg-bosque-50 px-3 py-1 text-xs font-medium text-bosque-600">
                  {congreso.rol}
                </span>
              </div>

              <h3 className="font-display text-xl font-medium text-bosque-800">
                {congreso.nombre}
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-piedra-500">
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} strokeWidth={1.6} />
                  {congreso.anio}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} strokeWidth={1.6} />
                  {congreso.lugar}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-piedra-500">{congreso.descripcion}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Congress;
