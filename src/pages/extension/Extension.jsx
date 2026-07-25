import PageHeader from "../../components/PageHeader.jsx";
import Card from "../../components/Card.jsx";
import { GraduationCap } from "lucide-react";
import { extension } from "../../data/extension.js";

function Extension() {
  return (
    <>
      <PageHeader
        eyebrow="Extencion"
        titulo="Proyectos de Extension"
        bajada="Presentaciones en congresos, jornadas, conferencias y simposios científicos."
      />

      <section className="contenedor py-24">
  <div className="flex flex-col gap-6">
    {extension.map((item, index) => {
      // Junta los metadatos disponibles (institución, lugar, director, coordinador, etc.)
      // en una sola línea, ignorando los que no existan en este item puntual
      const metadatos = [
        item.institucion,
        item.lugar,
        item.director && `Dir. ${item.director}`,
        item.coordinador && `Coord. ${item.coordinador}`,
        item.coordinadora && `Coord. ${item.coordinadora}`,
        item.proyecto,
        item.comunidad,
        item.comunidades && item.comunidades.join(", "),
      ].filter(Boolean);

      const descripcion = item.descripcion || item.resumen;

      const fechaMostrada = item.fecha || item.duracion;

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
              <span className="etiqueta-eyebrow">{item.tipo}</span>
              <span className="font-mono text-xs text-piedra-400">
                {item.periodo}
              </span>
            </div>

            <h3 className="font-display text-xl font-medium text-bosque-800">
              {item.titulo}
            </h3>

            {metadatos.length > 0 && (
              <p className="text-sm font-medium text-piedra-500">
                {metadatos.join(" · ")}
              </p>
            )}

            {descripcion && (
              <p className="text-sm leading-relaxed text-piedra-500">
                {descripcion}
              </p>
            )}

            {fechaMostrada && (
              <p className="text-xs text-piedra-400">{fechaMostrada}</p>
            )}

            {(item.ordenanza || item.resolucion || item.resoluciones) && (
              <p className="text-xs text-piedra-400">
                {item.ordenanza && `Ordenanza ${item.ordenanza}`}
                {item.resolucion && ` · Resolución ${item.resolucion}`}
                {item.resoluciones &&
                  ` · Resoluciones ${item.resoluciones.join(", ")}`}
              </p>
            )}

            {item.facilitadores && (
              <p className="text-xs text-piedra-400">
                Facilitadores: {item.facilitadores.join(", ")}
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

export default Extension;
