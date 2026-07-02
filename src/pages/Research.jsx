import PageHeader from "../components/PageHeader.jsx";
import ResearchCard from "../components/ResearchCard.jsx";
import { investigaciones } from "../data/investigaciones.js";

function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Investigación"
        titulo="Proyectos de investigación"
        bajada="Líneas de trabajo dedicadas al estudio y la conservación de ecosistemas patagónicos."
      />

      <section className="contenedor py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {investigaciones.map((investigacion) => (
            <ResearchCard key={investigacion.id} investigacion={investigacion} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Research;
