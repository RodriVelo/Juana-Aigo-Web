import { useState } from "react";
import { Send, CircleCheck } from "lucide-react";
import Button from "./Button.jsx";

const VALORES_INICIALES = {
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
};

/**
 * Formulario de contacto. Al no existir backend, la "responsabilidad única"
 * de este componente es capturar y validar los datos, y simular el envío.
 */
function ContactForm() {
  const [datosFormulario, setDatosFormulario] = useState(VALORES_INICIALES);
  const [envioExitoso, setEnvioExitoso] = useState(false);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatosFormulario((valoresAnteriores) => ({
      ...valoresAnteriores,
      [name]: value,
    }));
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    // Simulación de envío: no existe backend en este proyecto.
    setEnvioExitoso(true);
    setDatosFormulario(VALORES_INICIALES);
  }

  if (envioExitoso) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl2 border border-bosque-100 bg-bosque-50 p-8">
        <CircleCheck size={32} strokeWidth={1.5} className="text-bosque-500" />
        <h3 className="font-display text-xl font-medium text-bosque-800">
          Mensaje enviado
        </h3>
        <p className="text-sm leading-relaxed text-piedra-500">
          Gracias por escribir. Te responderé a la brevedad al correo indicado.
        </p>
        <button
          type="button"
          onClick={() => setEnvioExitoso(false)}
          className="text-sm font-medium text-bosque-600 underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={manejarEnvio} className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="text-sm font-medium text-bosque-700">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={datosFormulario.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre completo"
            className="rounded-xl border border-bosque-100 bg-arena-50 px-4 py-3 text-sm text-bosque-800 placeholder:text-piedra-400 focus:border-bosque-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="correo" className="text-sm font-medium text-bosque-700">
            Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            value={datosFormulario.correo}
            onChange={manejarCambio}
            placeholder="tu@correo.com"
            className="rounded-xl border border-bosque-100 bg-arena-50 px-4 py-3 text-sm text-bosque-800 placeholder:text-piedra-400 focus:border-bosque-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="asunto" className="text-sm font-medium text-bosque-700">
          Asunto
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          value={datosFormulario.asunto}
          onChange={manejarCambio}
          placeholder="Motivo de tu mensaje"
          className="rounded-xl border border-bosque-100 bg-arena-50 px-4 py-3 text-sm text-bosque-800 placeholder:text-piedra-400 focus:border-bosque-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-bosque-700">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={datosFormulario.mensaje}
          onChange={manejarCambio}
          placeholder="Contame en qué puedo ayudarte"
          className="resize-none rounded-xl border border-bosque-100 bg-arena-50 px-4 py-3 text-sm text-bosque-800 placeholder:text-piedra-400 focus:border-bosque-400"
        />
      </div>

      <Button type="submit" variante="primario" icono={Send} className="self-start">
        Enviar mensaje
      </Button>
    </form>
  );
}

export default ContactForm;
