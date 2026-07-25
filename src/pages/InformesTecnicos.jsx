import PageHeader from "../components/PageHeader.jsx";
import { congresos } from "../data/congresos.js";
import { informesReportesTecnicos } from "../data/informesTecnicos.js";
import Card from "../components/Card.jsx";
import { GraduationCap } from "lucide-react";

function InformesTecnicos() {
  return (
    <>
      <PageHeader
        eyebrow="Congresos"
        titulo="Informes Tecnicos"
        bajada="Presentaciones en congresos, jornadas, conferencias y simposios científicos."
      />
      <section className="contenedor py-24">
        <div className="flex flex-col gap-6">
          {informesReportesTecnicos.map((informe) => (
            <Card
              key={informe.id}
              className="flex flex-col gap-4 p-8 md:flex-row md:items-start md:gap-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bosque-50">
                <GraduationCap
                  size={22}
                  strokeWidth={1.6}
                  className="text-bosque-500"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="etiqueta-eyebrow">
                    {informe.institucion}
                  </span>
                  <span className="font-mono text-xs text-piedra-400">
                    {informe.anio}
                  </span>
                </div>

                <h3 className="font-display text-xl font-medium text-bosque-800">
                  {informe.titulo}
                </h3>

                <p className="text-sm font-medium text-piedra-500">
                  {informe.autores.join(", ")}
                </p>

                <p className="text-sm leading-relaxed text-piedra-500">
                  {informe.resumen}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default InformesTecnicos;
