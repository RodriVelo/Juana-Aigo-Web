import PageHeader from "../components/PageHeader.jsx";
import ResearchCard from "../components/ResearchCard.jsx";
import { proyectosInvestigacion } from "../data/investigaciones.js";

function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Investigación"
        titulo="Proyectos de investigación"
        bajada="Líneas de trabajo dedicadas al estudio y la conservación de ecosistemas patagónicos."
      />

      <section className="contenedor py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosInvestigacion.map((proyecto, index) => (
            <ResearchCard key={index} investigacion={proyecto} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Research;