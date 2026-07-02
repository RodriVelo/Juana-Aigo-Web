import { GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import { tesis } from "../data/tesis.js";

function Thesis() {
  return (
    <>
      <PageHeader
        eyebrow="Tesis"
        titulo="Tesis dirigidas y realizadas"
        bajada="Trabajos de grado y posgrado desarrollados o dirigidos a lo largo de mi carrera académica."
      />

      <section className="contenedor py-24">
        <div className="flex flex-col gap-6">
          {tesis.map((tesisIndividual) => (
            <Card key={tesisIndividual.id} className="flex flex-col gap-4 p-8 md:flex-row md:items-start md:gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bosque-50">
                <GraduationCap size={22} strokeWidth={1.6} className="text-bosque-500" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="etiqueta-eyebrow">{tesisIndividual.tipo}</span>
                  <span className="font-mono text-xs text-piedra-400">{tesisIndividual.anio}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-bosque-800">
                  {tesisIndividual.titulo}
                </h3>
                <p className="text-sm font-medium text-piedra-500">{tesisIndividual.universidad}</p>
                <p className="text-sm leading-relaxed text-piedra-500">
                  {tesisIndividual.descripcion}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Thesis;
