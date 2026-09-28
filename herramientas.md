# Qué es cada cosa y para qué se usa

## React
Es una **librería de JavaScript** para construir interfaces de usuario (UI). La idea central es dividir la pantalla en **componentes** (piezas reutilizables como un botón, una tarjeta, un formulario) y que la interfaz se actualice sola cuando cambian los datos.

- **Para qué se usa:** aplicaciones web con mucha interacción (paneles, redes sociales, tiendas online, editores).
- **Qué problema resuelve:** con JavaScript puro tenés que buscar elementos del HTML y modificarlos a mano cada vez que algo cambia. Con React describís cómo se ve la pantalla según el estado actual, y él se encarga de actualizarla.

## JSX
Es una **sintaxis** que te deja escribir algo parecido a HTML dentro de JavaScript. No es un lenguaje aparte: el navegador no la entiende, así que una herramienta (en este caso Vite) la convierte a JavaScript común antes de correr.

- **Para qué se usa:** para escribir la estructura visual de un componente de React junto con su lógica, en el mismo archivo.
- **Ejemplo:** `<h1 className="title">Hola, {nombre}</h1>`. Lo que va entre `{}` es JavaScript.

--- 

## CSS
Es el **lenguaje de estilos** de la web. HTML define qué hay en la página, CSS define cómo se ve: colores, tamaños, márgenes, tipografías, posiciones, animaciones.

- **Para qué se usa:** darle aspecto a cualquier página, con o sin React.
- **Cómo se usa:** escribís reglas (`.card { padding: 1rem; }`) y las aplicás a elementos mediante clases.

## Tailwind
Es un **framework de CSS** basado en clases utilitarias. En vez de escribir CSS en un archivo aparte, aplicás clases chicas y específicas directamente en el elemento.

- **Ejemplo:** `className="p-4 bg-white rounded-lg shadow"` significa padding, fondo blanco, bordes redondeados y sombra.
- **Para qué se usa:** diseñar rápido sin salir del JSX, con un sistema de diseño consistente (espaciados, colores y tamaños ya definidos), y con soporte simple para responsive (`md:`), hover (`hover:`) y modo oscuro (`dark:`).
- **Ventaja:** no tenés que inventar nombres de clases ni saltar entre archivos.

--- 

## Vite
Es una **herramienta de desarrollo** (bundler y servidor de desarrollo). No es parte de tu app, es lo que la prepara y la hace correr.

- **Qué hace:** levanta un servidor local (`npm run dev`), recarga la página al instante cada vez que guardás un cambio, traduce JSX a JavaScript, y cuando terminás genera la versión optimizada para publicar (`npm run build`).
- **Por qué se usa:** es muy rápido, y hoy es el estándar para arrancar proyectos de React. Reemplazó en gran parte a Create React App.

## Cómo se conectan entre sí

| Capa | Herramienta | Rol |
|---|---|---|
| Estructura y lógica | React + JSX | Qué se muestra y cómo reacciona |
| Aspecto | CSS / Tailwind | Cómo se ve |
| Herramienta de trabajo | Vite | Corre, traduce y empaqueta todo |

O dicho corto: **React** arma la interfaz, **JSX** es cómo la escribís, **CSS o Tailwind** la estilizan, y **Vite** hace que todo eso funcione en tu navegador mientras desarrollás.

## Otros términos que aparecieron en el tutorial

- **Componente:** función que devuelve JSX y representa una pieza de la interfaz.
- **Props:** datos que un componente padre le pasa a un hijo (como argumentos de una función).
- **Estado (`useState`):** datos que un componente recuerda y que, al cambiar, hacen que se vuelva a dibujar.
- **`useEffect`:** te deja ejecutar código en momentos concretos, por ejemplo al cargar el componente o cuando cambia un dato (pedir datos a una API, guardar en `localStorage`).
- **npm:** el gestor de paquetes de Node.js, con el que instalás librerías como React y Tailwind.
