
Sitiow web para sacar ideas:
- https://www.cambridgeenglish.org/latinamerica/
- https://www.ef.com.ar/pg/inglaterra/

  Envato:
- https://template.hasthemes.com/glaxdu/glaxdu/about-us.html
- https://html.rovadex.com/html-informex/?storefront=envato-elements

Mis opiniones
 - Me gusta la idea de imagen de fondo al inicio de la web.
 - Tiene un color verde oscuro en su institucion, es buena opcion probar por ahi
 - Implementar un timeline


# AACI Mar del Plata — Sitio institucional

Este proyecto es un sitio web institucional para la Asociación Argentina de Cultura Inglesa de Mar del Plata (AACI), construido con Vite + React + TypeScript y Tailwind CSS.

## Scripts

- `npm run dev`: entorno de desarrollo
- `npm run build`: compilar para producción
- `npm run preview`: previsualizar build

## Contenidos editables

- `src/content/site.ts`: nombre, lema, contacto, redes, cursos, plan de estudios (incluye lecturas sugeridas), exámenes, testimonios, galería, links (WhatsApp y Maps).

## Rutas principales

- `/` Inicio
- `/institucion` Quiénes somos
- `/cursos` Oferta académica
- `/plan-de-estudios` Plan de estudios (incluye lecturas sugeridas)
- `/examenes` Exámenes internacionales
- `/inscripcion` Formulario y contacto
- `/ubicacion` Dónde estamos (mapa)
- `/galeria` Galería de fotos
- `/testimonios` Testimonios
- `/novedades` Novedades (placeholder)

## WhatsApp

El botón apunta a `https://wa.me/542234956513` con un mensaje prellenado. Podés cambiarlo en `src/content/site.ts`.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
