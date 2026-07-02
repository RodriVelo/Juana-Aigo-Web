import { Download, Users } from "lucide-react";
import Card from "./Card.jsx";
import Button from "./Button.jsx";

/**
 * Tarjeta que representa una publicación científica dentro de un listado.
 */
function PublicationCard({ publicacion }) {
  return (
    <Card className="flex flex-col gap-4 p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="etiqueta-eyebrow">{publicacion.revista}</span>
        <span className="font-mono text-xs text-piedra-400">{publicacion.anio}</span>
      </div>

      <h3 className="font-display text-xl font-medium leading-snug text-bosque-800">
        {publicacion.titulo}
      </h3>

      <p className="flex items-center gap-2 text-sm text-piedra-500">
        <Users size={15} strokeWidth={1.6} />
        {publicacion.autores.join(", ")}
      </p>

      <p className="text-sm leading-relaxed text-piedra-500">{publicacion.resumen}</p>

      <div className="pt-2">
        <Button
          variante="secundario"
          onClick={() =>
            window.alert(
              `Ir a la publicacion de "${publicacion.titulo}".`
            )
          }
        >
          Ir a la publicacion en revista
        </Button>
      </div>
    </Card>
  );
}

export default PublicationCard;
