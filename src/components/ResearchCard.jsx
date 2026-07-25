import Card from "./Card.jsx";

// Campos que representan a la persona/entidad responsable, con su etiqueta
const CAMPOS_RESPONSABLE = [
  { clave: "director", etiqueta: "Director" },
  { clave: "directora", etiqueta: "Directora" },
  { clave: "codirector", etiqueta: "Codirector" },
  { clave: "codirectora", etiqueta: "Codirectora" },
  { clave: "coordinador", etiqueta: "Coordinador" },
  { clave: "directores", etiqueta: "Directores" },
  { clave: "responsables", etiqueta: "Responsables" },
  { clave: "investigadorResponsable", etiqueta: "Investigador responsable" },
  { clave: "investigadoraResponsable", etiqueta: "Investigadora responsable" },
  { clave: "responsableCientifica", etiqueta: "Responsable científica" },
];

// Campos de datos institucionales/técnicos, con su etiqueta
const CAMPOS_META = [
  { clave: "institucion", etiqueta: "Institución" },
  { clave: "financiador", etiqueta: "Financiador" },
  { clave: "programa", etiqueta: "Programa" },
  { clave: "codigo", etiqueta: "Código" },
  { clave: "proyecto", etiqueta: "Proyecto" },
  { clave: "proyectos", etiqueta: "Proyectos" },
  { clave: "resolucion", etiqueta: "Resolución" },
  { clave: "beneficiario", etiqueta: "Beneficiario" },
  { clave: "tipo", etiqueta: "Tipo" },
];

function formatearValor(valor) {
  return Array.isArray(valor) ? valor.join(", ") : valor;
}

/**
 * Tarjeta que representa un proyecto de investigación.
 * Los campos de responsable y metadatos son dinámicos: solo se
 * muestran los que existan en cada registro.
 */
function ResearchCard({ investigacion }) {
  const responsables = CAMPOS_RESPONSABLE.filter(
    ({ clave }) => investigacion[clave]
  );
  const metadatos = CAMPOS_META.filter(({ clave }) => investigacion[clave]);

  return (
    <Card className="flex flex-col gap-3 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-bosque-50 px-2.5 py-0.5 text-[11px] font-medium text-bosque-600">
          {investigacion.periodo}
        </span>
      </div>

      <h3 className="font-display text-base font-medium leading-snug text-bosque-800">
        {investigacion.titulo}
      </h3>

      {responsables.length > 0 && (
        <div className="flex flex-col gap-1">
          {responsables.map(({ clave, etiqueta }) => (
            <p key={clave} className="text-xs text-piedra-600">
              <span className="font-medium text-bosque-700">{etiqueta}: </span>
              {formatearValor(investigacion[clave])}
            </p>
          ))}
        </div>
      )}

      {metadatos.length > 0 && (
        <div className="mt-auto flex flex-col gap-1 border-t border-piedra-100 pt-2">
          {metadatos.map(({ clave, etiqueta }) => (
            <p key={clave} className="text-[11px] leading-relaxed text-piedra-400">
              <span className="font-medium text-piedra-500">{etiqueta}: </span>
              {formatearValor(investigacion[clave])}
            </p>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ResearchCard;