import Card from "./Card.jsx";

/**
 * Tarjeta que representa un libro publicado, con portada y datos editoriales.
 */
function BookCard({ libro }) {
  return (
    <Card className="flex flex-col overflow-hidden" conAnimacion={true}>
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={libro.portada}
          alt={`Portada del libro ${libro.nombre}`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-mono text-xs text-piedra-400">
          {libro.editorial} · {libro.anio}
        </span>
        <h3 className="font-display text-lg font-medium leading-snug text-bosque-800">
          {libro.nombre}
        </h3>
        <p className="text-sm leading-relaxed text-piedra-500">{libro.descripcion}</p>
      </div>
    </Card>
  );
}

export default BookCard;
