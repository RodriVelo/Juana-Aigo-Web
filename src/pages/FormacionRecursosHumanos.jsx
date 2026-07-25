import { CalendarDays, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import { formacionRecursosHumanos } from "../data/formacionRecursosHumanos.js";

function FormacionRecursosHumanos() {
  return (
    <>
      <PageHeader
        eyebrow="Formación de RRHH"
        titulo="Dirección y formación de recursos humanos"
        bajada="Dirección de becas, pasantías y tesistas en el marco de proyectos de investigación."
      />

      <section className="contenedor py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formacionRecursosHumanos.map((item, index) => (
            <Card key={index} className="flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="etiqueta-eyebrow text-xs">{item.tipo}</span>
                <span className="rounded-full bg-bosque-50 px-2.5 py-0.5 text-[11px] font-medium text-bosque-600">
                  {item.periodo}
                </span>
              </div>

              <h3 className="font-display text-base font-medium leading-snug text-bosque-800">
                {item.titulo}
              </h3>

              {item.lugar && (
                <span className="flex items-center gap-1.5 text-xs text-piedra-500">
                  <MapPin size={14} strokeWidth={1.6} />
                  {item.lugar}
                </span>
              )}

              {item.descripcion && (
                <p className="text-xs leading-relaxed text-piedra-500">{item.descripcion}</p>
              )}

              {item.tema && (
                <p className="text-xs leading-relaxed text-piedra-500">
                  <span className="font-medium text-bosque-700">Tema: </span>
                  {item.tema}
                </p>
              )}

              {item.codirector && (
                <p className="text-xs text-piedra-500">
                  <span className="font-medium text-bosque-700">Codirector: </span>
                  {item.codirector}
                </p>
              )}

              {item.disposicion && (
                <p className="text-[11px] text-piedra-400">{item.disposicion}</p>
              )}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default FormacionRecursosHumanos;