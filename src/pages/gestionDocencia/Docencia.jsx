import PageHeader from "../../components/PageHeader.jsx";

import Card from "../../components/Card.jsx";
import { GraduationCap } from "lucide-react";
import { docencia } from "../../data/docencia.js";

function Docencia() {
  return (
    <>
      <PageHeader
        eyebrow="Extencion"
        titulo="Docencia"
        bajada="Presentaciones en congresos, jornadas, conferencias y simposios científicos."
      />
      <section className="contenedor py-24">
  <div className="flex flex-col gap-6">
    {docencia.map((item, index) => {
      // Asignatura(s): puede venir singular, plural, o como "actividad" (caso PREFALC)
      const asignaturaMostrada =
        item.asignatura ||
        (item.asignaturas && item.asignaturas.join(", ")) ||
        item.actividad;

      // Institución(es): singular o array
      const institucionMostrada =
        item.institucion ||
        (item.instituciones && item.instituciones.join(", "));

      // Metadatos secundarios: carrera, sede/lugar, profesora, módulo, programa
      const metadatos = [
        item.carrera,
        item.sede || item.lugar,
        item.profesora && `Prof. a cargo: ${item.profesora}`,
        item.modulo && `Módulo: ${item.modulo}`,
        item.programa,
      ].filter(Boolean);

      return (
        <Card
          key={`${item.periodo}-${index}`}
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
              <span className="etiqueta-eyebrow">{item.cargo}</span>
              <span className="font-mono text-xs text-piedra-400">
                {item.periodo}
              </span>
            </div>

            <h3 className="font-display text-xl font-medium text-bosque-800">
              {asignaturaMostrada}
            </h3>

            {institucionMostrada && (
              <p className="text-sm font-medium text-piedra-500">
                {institucionMostrada}
              </p>
            )}

            {metadatos.length > 0 && (
              <p className="text-sm leading-relaxed text-piedra-500">
                {metadatos.join(" · ")}
              </p>
            )}

            {(item.fecha || item.duracion) && (
              <p className="text-xs text-piedra-400">
                {[item.fecha, item.duracion].filter(Boolean).join(" · ")}
              </p>
            )}

            {(item.resolucion || item.observacion) && (
              <p className="text-xs text-piedra-400">
                {item.resolucion && `Resolución ${item.resolucion}`}
                {item.observacion && ` · ${item.observacion}`}
              </p>
            )}
          </div>
        </Card>
      );
    })}
  </div>
</section>
    </>
  );
}

export default Docencia;
