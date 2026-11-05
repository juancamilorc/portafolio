# Portafolio · Juan Camilo Ramírez

Portafolio personal de una sola página, bilingüe (ES/EN), hecho con Angular y prerenderizado de forma estática (SSG) para desplegar en Vercel.

## Requisitos

- Node.js `^22.22.3`, `^24.15.0` o `>=26` (Angular 22 no soporta Node 23). Hay un `.nvmrc` con la versión 24.
- npm

## Cómo correrlo

```bash
npm install
npm start          # servidor de desarrollo en http://localhost:4200
npm run build      # genera el sitio estático en dist/portafolio/browser
npm run preview    # sirve el build localmente
```

## Despliegue en Vercel

`vercel.json` ya define el comando de build (`npm run build`) y el directorio de salida (`dist/portafolio/browser`).

## Estructura

- `src/app/content.ts`: interfaces tipadas y textos en español e inglés (proyectos, tecnologías, contacto).
- `src/app/app.ts` / `app.html`: componente standalone con una signal de idioma y la plantilla de la página.
- `src/styles.css`: variables de diseño y estilos (CSS plano).

## Editar contenido

Cada proyecto tiene `title`, `status`, `desc`, `tags` y, opcionalmente, `demoUrl` y `codeUrl`. Solo se muestra un enlace si su URL existe.
