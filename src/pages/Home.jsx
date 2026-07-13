import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import ResearchCard from "../components/ResearchCard.jsx";
import PublicationCard from "../components/PublicationCard.jsx";
import BookCard from "../components/BookCard.jsx";
import ContadorEstadisticas from "../components/ContadorEstadisticas.jsx";
import { perfil } from "../data/perfil.js";
import { investigaciones } from "../data/investigaciones.js";
import { publicaciones } from "../data/publicaciones.js";
import { libros } from "../data/libros.js";

function Home() {
  const investigacionesDestacadas = investigaciones.slice(0, 3);
  const publicacionesDestacadas = publicaciones.filter(
    (publicacion) => publicacion.destacada
  );
  const librosDestacados = libros.filter((libro) => libro.destacado);

  return (
    <>
      <Hero />

      {/* Presentación y biografía breve */}
      <section className="contenedor grid gap-12 py-24 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-xl2 shadow-suave">
          <img
            src="https://scontent.fcpc1-1.fna.fbcdn.net/v/t1.6435-9/159333727_10223799567153676_5260459907476042500_n.jpg?stp=dst-jpg_tt6&cstp=mx2000x2015&ctp=s2000x2015&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE0XM1iHaZxhOVBr3EoMBzoePab49nqCYl49pvj2eoJiRaAcOjKoW1N77BjRbjL8gpNpg5HYWSNax9MbmhkzEO7&_nc_ohc=dx1E7nYh5a4Q7kNvwFSCmlY&_nc_oc=Adrs7K8hogFwWqpZDrhPLmll86K6G2V1KzoyTMugB0S3wfHUR1y5Xq633f9qhr0j3L5qO5qHdbTtWiGu5M6im4IP&_nc_zt=23&_nc_ht=scontent.fcpc1-1.fna&_nc_gid=qPl5GLhNzCngRa-OdH4rLA&_nc_ss=7b2a8&oh=00_AQBEk81u1VYNbiwI5R4eGGYkzAs-U6i-gXHs4A_qCqBUVw&oe=6A7CACEF"
            alt="Dra. Valentina Correa realizando trabajo de campo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="etiqueta-eyebrow">Presentación</span>
          <h2 className="titulo-display text-3xl font-medium leading-tight md:text-4xl">
            Ciencia de campo al servicio de la conservación
          </h2>
          <p className="text-base leading-relaxed text-piedra-500 md:text-lg">
            {perfil.biografiaCorta}
          </p>
          <Button variante="secundario" enlaceInterno="/sobre-mi" icono={ArrowRight} className="self-start">
            Conocer mi trayectoria
          </Button>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-bosque-50/60 py-20">
        <div className="contenedor">
          <ContadorEstadisticas estadisticas={perfil.estadisticas} />
        </div>
      </section>

      {/* Resumen de investigaciones */}
      <section className="contenedor flex flex-col gap-12 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Investigación"
            titulo="Proyectos en curso y finalizados"
            bajada="Un vistazo a las líneas de investigación que guían mi trabajo de campo y de laboratorio."
          />
          <Button variante="secundario" enlaceInterno="/investigacion" icono={ArrowRight}>
            Ver todas
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {investigacionesDestacadas.map((investigacion) => (
            <ResearchCard key={investigacion.id} investigacion={investigacion} />
          ))}
        </div>
      </section>

      {/* Publicaciones destacadas */}
      <section className="bg-bosque-800 py-24">
        <div className="contenedor flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="etiqueta-eyebrow text-bosque-300">Publicaciones</span>
              <h2 className="font-display text-3xl font-medium text-arena-50 md:text-4xl">
                Publicaciones destacadas
              </h2>
              <p className="text-base leading-relaxed text-arena-100/70 md:text-lg">
                Una selección de artículos científicos publicados en revistas especializadas.
              </p>
            </div>
            <Button variante="claro" enlaceInterno="/publicaciones" icono={ArrowRight}>
              Ver todas
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {publicacionesDestacadas.map((publicacion) => (
              <PublicationCard key={publicacion.id} publicacion={publicacion} />
            ))}
          </div>
        </div>
      </section>

      {/* Libros destacados */}
      <section className="contenedor flex flex-col gap-12 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Libros"
            titulo="Libros publicados"
            bajada="Trabajos editoriales que reúnen años de investigación de campo y trabajo académico."
          />
          <Button variante="secundario" enlaceInterno="/libros" icono={ArrowRight}>
            Ver todos
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {librosDestacados.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>

      {/* CTA de contacto */}
      <section className="contenedor pb-28">
        <div className="flex flex-col items-start gap-6 rounded-xl2 bg-bosque-50 p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-bosque-800 md:text-3xl">
              ¿Interesada o interesado en colaborar?
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-piedra-500">
              Estoy abierta a proyectos de investigación conjunta, actividades de divulgación
              y consultorías en conservación ambiental.
            </p>
          </div>
          <Button variante="primario" enlaceInterno="/contacto" icono={ArrowRight}>
            Escribime
          </Button>
        </div>
      </section>
    </>
  );
}

export default Home;
