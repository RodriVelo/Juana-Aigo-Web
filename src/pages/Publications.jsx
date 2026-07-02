import PageHeader from "../components/PageHeader.jsx";
import PublicationCard from "../components/PublicationCard.jsx";
import { publicaciones } from "../data/publicaciones.js";

function Publications() {
  return (
    <>
      <PageHeader
        eyebrow="Publicaciones"
        titulo="Publicaciones científicas"
        bajada="Artículos evaluados por pares, publicados en revistas nacionales e internacionales."
      />

      <section className="contenedor py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publicaciones.map((publicacion) => (
            <PublicationCard key={publicacion.id} publicacion={publicacion} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Publications;
