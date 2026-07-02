import { GraduationCap, Microscope } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Timeline from "../components/Timeline.jsx";
import { perfil } from "../data/perfil.js";
import fotoPerfil from "../assets/img/fotoPerfil.jpeg"
function About() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí"
        titulo="Quince años dedicados a la ciencia de campo"
        bajada="Investigadora, y consultora en ecología y conservación."
      />

      {/* Fotografía y biografía */}
      <section className="contenedor grid gap-14 py-24 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="overflow-hidden rounded-xl2 shadow-suave md:sticky md:top-28">
          <img
            src={fotoPerfil}
            alt="Retrato profesional de la Dra. Valentina Correa"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          {perfil.biografiaExtendida.map((parrafo, indice) => (
            <p key={`parrafo-${indice}`} className="text-base leading-relaxed text-piedra-500 md:text-lg">
              {parrafo}
            </p>
          ))}
        </div>
      </section>

      {/* Formación académica */}
      <section className="bg-bosque-50/60 py-24">
        <div className="contenedor flex flex-col gap-12">
          <SectionTitle
            eyebrow="Formación"
            titulo="Formación académica"
            bajada="Estudios de grado y posgrado que sostienen mi práctica investigativa."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {perfil.formacionAcademica.map((formacion) => (
              <div
                key={formacion.id}
                className="flex flex-col gap-3 rounded-xl2 border border-bosque-100 bg-arena-50 p-7 shadow-tarjeta"
              >
                <GraduationCap size={22} strokeWidth={1.6} className="text-bosque-500" />
                <span className="font-mono text-xs text-piedra-400">{formacion.anio}</span>
                <h3 className="font-display text-lg font-medium text-bosque-800">
                  {formacion.titulo}
                </h3>
                <p className="text-sm font-medium text-piedra-500">{formacion.institucion}</p>
                <p className="text-sm leading-relaxed text-piedra-500">{formacion.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especializaciones */}
      <section className="contenedor flex flex-col gap-12 py-24">
        <SectionTitle
          eyebrow="Especialización"
          titulo="Áreas de especialización"
          bajada="Campos temáticos en los que concentro mi investigación y práctica profesional."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perfil.especializaciones.map((especializacion) => (
            <div
              key={especializacion}
              className="flex items-center gap-3 rounded-xl border border-bosque-100 bg-arena-50 px-5 py-4"
            >
              <Microscope size={18} strokeWidth={1.6} className="shrink-0 text-bosque-500" />
              <span className="text-sm font-medium text-bosque-800">{especializacion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Línea de tiempo académica */}
      <section className="bg-bosque-50/60 py-24">
        <div className="contenedor flex flex-col gap-12">
          <SectionTitle
            eyebrow="Trayectoria"
            titulo="Línea de tiempo académica"
            bajada="Los hitos principales de mi recorrido profesional, en orden cronológico."
          />
          <Timeline eventos={perfil.lineaDeTiempo} />
        </div>
      </section>
    </>
  );
}

export default About;
