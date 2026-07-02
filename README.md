# Sitio institucional — Dra. Valentina Correa (Bióloga)

Sitio web institucional para una bióloga, desarrollado con **React + Vite + Tailwind CSS + React Router + Framer Motion**. Todo el contenido es estático (sin backend).

## Puesta en marcha

```bash
npm install
npm run dev
```

Luego abrí la URL que indique la terminal (por defecto `http://localhost:5173`).

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── assets/          Recursos estáticos propios
├── components/      Componentes reutilizables (Navbar, Card, Timeline, etc.)
├── pages/           Una página por ruta
├── layout/          MainLayout.jsx (Navbar + Footer compartidos)
├── data/            Contenido separado del código (publicaciones, libros, etc.)
├── App.jsx          Definición de rutas
└── main.jsx         Punto de entrada
```

## Rutas disponibles

| Ruta             | Página        |
| ---------------- | ------------- |
| `/`               | Inicio        |
| `/sobre-mi`        | Sobre mí      |
| `/investigacion`   | Investigación |
| `/publicaciones`   | Publicaciones |
| `/libros`          | Libros        |
| `/tesis`           | Tesis         |
| `/docencia`        | Docencia      |
| `/congresos`       | Congresos     |
| `/contacto`        | Contacto      |

## Notas de diseño

- Paleta basada en verdes de bosque y oliva, beige y arena, sin colores saturados.
- Tipografía: **Fraunces** (display) + **Inter** (texto) + **IBM Plex Mono** (detalles tipo ficha de campo).
- Todo el contenido editable vive en `src/data/`, separado de los componentes visuales.
- Las imágenes de referencia provienen de Unsplash y pueden reemplazarse por fotografías reales en `src/assets/`.
