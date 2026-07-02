import PageHeader from "../components/PageHeader.jsx";
import BookCard from "../components/BookCard.jsx";
import { libros } from "../data/libros.js";

function Books() {
  return (
    <>
      <PageHeader
        eyebrow="Libros"
        titulo="Libros publicados"
        bajada="Obras editoriales, guías de campo y manuales técnicos publicados a lo largo de mi carrera."
      />

      <section className="contenedor py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {libros.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
