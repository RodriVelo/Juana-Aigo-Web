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
            src="https://scontent.fcpc1-1.fna.fbcdn.net/v/t1.6435-9/95346514_10221208033046943_1862183470336311296_n.jpg?stp=dst-jpg_tt6&cstp=mx691x691&ctp=s691x691&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFsRPfBrxlBN4KIdYKzrxHs7vaiccQM0xfu9qJxxAzTF7IWxTh3yahnfJHqnglo2z7vzxcsNcrRzISF1wNTR4AB&_nc_ohc=Wtrj_JaJrXYQ7kNvwHvf_za&_nc_oc=AdovaULFpkgfjiz9wWa7Jid7eYNwwfU1SowSAf37-sxeHJDfT2uCxmSUYuuZ-tFqlY0yYntIPBi_mcAa7qgM_bJP&_nc_zt=23&_nc_ht=scontent.fcpc1-1.fna&_nc_gid=F2kvpNFyG4C0NyE96SIp5A&_nc_ss=7b2a8&oh=00_AQClVjoZR5zoK9AZY4RnYtyyMVWH4e8nhd-Lz0keGNmpvg&oe=6A7C87F4"
            alt="Retrato profesional de Juana Aigo"
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
