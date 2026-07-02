import PageHeader from "../components/PageHeader.jsx";
import Timeline from "../components/Timeline.jsx";
import { docencia } from "../data/docencia.js";

function Teaching() {
  // Adaptamos los datos de docencia al formato esperado por Timeline
  const eventosDocencia = docencia.map((asignatura) => ({
    id: asignatura.id,
    anio: asignatura.periodo,
    titulo: asignatura.materia,
    lugar: `${asignatura.universidad} · ${asignatura.nivel}`,
    descripcion: asignatura.descripcion,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Docencia"
        titulo="Experiencia docente"
        bajada="Formación de grado y posgrado en universidades nacionales, con foco en ecología y conservación."
      />

      <section className="contenedor py-24">
        <Timeline eventos={eventosDocencia} />
      </section>
    </>
  );
}

export default Teaching;
