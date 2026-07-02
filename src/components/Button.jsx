import { Link } from "react-router-dom";

const ESTILOS_POR_VARIANTE = {
  primario:
    "bg-bosque-700 text-arena-50 hover:bg-bosque-800 shadow-tarjeta",
  secundario:
    "bg-transparent text-bosque-700 border border-bosque-300 hover:bg-bosque-50",
  claro:
    "bg-arena-50 text-bosque-800 hover:bg-arena-100",
};

/**
 * Botón reutilizable. Si recibe la prop "enlaceInterno" se renderiza como
 * Link de React Router; si recibe "enlaceExterno" se renderiza como <a>;
 * en caso contrario, se renderiza como <button> nativo.
 */
function Button({
  children,
  variante = "primario",
  enlaceInterno,
  enlaceExterno,
  icono: Icono,
  onClick,
  type = "button",
  className = "",
}) {
  const clasesBase =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap";
  const clasesFinales = `${clasesBase} ${ESTILOS_POR_VARIANTE[variante]} ${className}`;

  if (enlaceInterno) {
    return (
      <Link to={enlaceInterno} onClick={onClick} className={clasesFinales}>
        {children}
        {Icono && <Icono size={18} strokeWidth={1.8} />}
      </Link>
    );
  }

  if (enlaceExterno) {
    return (
      <a
        href={enlaceExterno}
        target="_blank"
        rel="noopener noreferrer"
        className={clasesFinales}
      >
        {children}
        {Icono && <Icono size={18} strokeWidth={1.8} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={clasesFinales}>
      {children}
      {Icono && <Icono size={18} strokeWidth={1.8} />}
    </button>
  );
}

export default Button;
