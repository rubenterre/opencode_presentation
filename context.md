## Visión del proyecto
Este proyecto es una **presentación web en Astro** sobre **OpenCode**, pensada para usarse en clase con alumnado de desarrollo web.

El objetivo principal no es crear una aplicación compleja, sino una **slideshow de diapositivas a pantalla completa** con enfoque en:

- HTML semántico y componentes Astro.
- CSS modular en `src/styles/global.css` (tema oscuro, tarjetas, tablas, etiquetas, bloques de código).
- JavaScript plano en `src/lib/script.js` para la navegación entre slides.

***
## Requisitos funcionales
- Mostrar la presentación a pantalla completa:
  - Cada diapositiva es un componente en `src/components/layout/SlideXX.astro`.
  - Solo una diapositiva está visible a la vez (clase `active` gestionada desde `src/lib/script.js`).
- Permitir navegación secuencial:
  - Botones “Anterior” / “Siguiente” fijos (en el layout común `src/layouts/Layout.astro`).
  - Navegación con teclado: flechas izquierda/derecha y espacio para avanzar.
  - Barra de progreso en la parte superior (contador y barra de progreso).
- Estructura clara por secciones:
  - Cada slide con cabecera (`slide-header`) y contenido principal (`slide-body`).
  - Contenido principal con tarjetas, listas, bloques de código y tablas con formato compartido.
- Explicar con claridad:
  - Qué es un LLM, con ejemplos (GPT, Claude, Gemini, Llama).
  - Qué es OpenCode y su filosofía open-source, multi-proveedor y TUI.
  - Requisitos de uso, instalación, configuración inicial y flujos Plan/Build.
***
## Requisitos técnicos
### Stack principal
- **Astro**: `src/pages/index.astro`, `src/layouts/Layout.astro`, `src/components/layout/SlideXX.astro`.
- **HTML5 semántico** con estructuras `main`, `section`, `article`, etc.
- **CSS** en `src/styles/global.css`; variables y utilidades con estilo BEM.
- **JS** en `src/lib/script.js`:
  - `const slides`, `currentIndex`, `updateUI()`.
  - `addEventListener` para teclas y clics en botones.
- **Recursos**:
  - Fuentes externas si es necesario mediante `@import` en el CSS.
  - Sin dependencias front-end externas (solo Astro + CSS + JS puro).

### Comportamiento de navegación
- El script mantiene `current` y `total`.
- Al cambiar de slide:
  - Añade/quita `active`.
  - Actualiza el contador `x / total`.
  - Cambia la barra de progreso (`width`).
  - Activa/desactiva los botones en primera/última diapositiva.

***
## Arquitectura de alto nivel
### Estructura de la página
- `src/pages/index.astro` importa las 10 slides y el `Layout`.
- `src/layouts/Layout.astro` envuelve la presentación con su marcado global, navegación fija y placeholder para el slot.
- `src/components/layout/Slide01.astro` ... `Slide10.astro` contienen el contenido de cada diapositiva.
- `src/lib/script.js` gestiona el estado y los eventos.
- `src/styles/global.css` define tema, componentes y responsividad.

### Contenido por sección
- Slide 1 – Portada (OpenCode, etiquetas IA, enfoque terminal-first, código abierto).
- Slide 2 – Qué es un LLM.
- Slide 3 – Qué es OpenCode.
- Slide 4 – Requisitos técnicos y APIs.
- Slide 5 – Instalación en macOS/Linux/Windows.
- Slide 6 – Configuración inicial (`/connect`, `.env`, `AGENTS.md`).
- Slide 7 – Uso diario (`opencode`, prompts, atajos).
- Slide 8 – Modos Plan/Build.
- Slide 9 – Buenas prácticas y seguridad.
- Slide 10 – Recursos y enlaces útiles.

***
## Organización del proyecto
- Archivos principales:
  - `src/pages/index.astro`
  - `src/layouts/Layout.astro`
  - `src/components/layout/Slide01.astro` ... `Slide10.astro`
  - `src/lib/script.js`
  - `src/styles/global.css`
  - `public/` (assets estáticos)

- Objetivo: que cada diapositiva sea un componente reutilizable y el código sea didáctico y fácil de entender.

***
## Criterios de UX
- Tema oscuro con alto contraste y tipografías institucionales.
- Navegación por teclado accesible, foco visible, ARIA cuando proceda.
- Diseño responsive, priorizando escritorio/proyección, pero adaptado a tablets.

***
## Criterios de calidad de código
- Mantener la arquitectura Astro (layout + slots + componentes) y separar CSS/JS.
- Reutilización de clases `slide-header`, `slide-body`, `card`, etc.
- Documentación y comentarios mínimos orientados a estudiantes.

La presentación explica:

- Qué es un **modelo LLM**.
- Qué es **OpenCode**.
- Requisitos previos.
- Instalación.
- Configuración inicial.
- Cómo usarlo en el día a día.
- Modos de trabajo (Plan / Build).
- Buenas prácticas.
- Recursos y documentación oficial.

El foco está en que el código de la página sea **flexible, fácil de mantener y pedagógico**, para usarlo en clase como ejemplo de:

- Estructura de presentación tipo “Slide Deck” en HTML.
- Uso de estilos modernos sin frameworks.
- Integración de contenido técnico (bloques de código, tablas, badges, etc.).

***
## Requisitos funcionales
- Mostrar una **presentación a pantalla completa**:
  - Cada diapositiva es un `.slide` con contenido específico (portada, LLM, OpenCode, requisitos, instalación, etc.).
  - Solo una diapositiva está visible a la vez (clase `active`).
- Permitir una **navegación secuencial**:
  - Botones “Anterior” / “Siguiente” fijos en la parte inferior.
  - Navegación por teclado: flechas izquierda/derecha (y espacio para avanzar).
  - Barra de progreso en la parte superior indicando el avance (1/10, 2/10…).
- Mantener una **estructura clara por secciones**:
  - Cada slide tiene un header con etiqueta pequeña (“Fundamentos”, “Presentación”, “Preparación”…) y un título principal.
  - El contenido principal se organiza con **cards**, listas, bloques de código y tablas.
- Explicar con claridad:
  - Qué es un **LLM** y ejemplos habituales (GPT, Claude, Gemini, Llama, etc.).
  - Qué es **OpenCode** como agente de codificación open source para terminal, con multi-proveedor y más de 75 LLMs soportados.
  - Requisitos de uso (terminal moderno, Node/Homebrew/Chocolatey opcional, claves API o modelos locales como Ollama).
  - Configuración inicial: `/connect`, variables de entorno, archivo `AGENTS.md`.
  - Cómo se usa en el proyecto: comandos básicos, modo TUI, ejemplos de prompts, soporte de imágenes en terminal.
  - Modos Plan/Build y flujo recomendado (analizar → planificar → implementar → verificar).
  - Buenas prácticas, seguridad con claves API y actualizaciones.
  - Recursos oficiales (docs, GitHub, tutoriales en español, guías para Ollama).

***
## Requisitos técnicos
### Stack principal
- **Estructura**: plantilla Astro básica con carpeta `/src/lib` y `/src/styles`.
- **Tecnologías**:
  - Framework Astro.
  - HTML5.
  - CSS puro con variables, grid y flexbox (tema oscuro, cards, tags, tablas).
  - JavaScript plano para:
    - Gestionar el índice de la diapositiva actual.
    - Añadir/quitar la clase `active`.
    - Actualizar contador y barra de progreso.
    - Gestionar eventos de teclado (flechas y espacio).
- **Dependencias externas**:
  - Uso de fuentes via `@import` (Google Fonts: Inter, JetBrains Mono).
  - No hay build system ni bundler; el objetivo es un sitio estático optimizado.
### Comportamiento de navegación
- El JS mantiene una variable `current` con el slide actual y `total` de diapositivas.
- Al cambiar de diapositiva:
  - Se quita la clase `active` de la anterior y se añade a la nueva.
  - Se actualiza el texto `NN / 10` en el contador.
  - Se actualiza el ancho de la barra de progreso.
  - Se deshabilitan los botones en el primero/último slide.

***
## Arquitectura de alto nivel
### Estructura de la página
- `body` contiene:
  - Un elemento `.progress` en la parte superior para la barra de progreso.
  - Un contador de diapositivas `.slide-num`.
  - Un contenedor `.slideshow` con todas las `.slide`.
  - Un bloque `.nav` fijo con las acciones de navegación.
- Cada `.slide`:
  - Tiene un `id` tipo `slide-1`, `slide-2`, etc.
  - Incluye:
    - `.slide-header` con etiqueta pequeña y título.
    - `.slide-body` con el contenido principal (columnas según la slide).
    - `.slide-footer` con texto de marca y nombre de sección.
### Contenido por sección (resumen conceptual)
- **Slide 1 – Portada**
  Presentación de OpenCode como agente de codificación en terminal, con tags de IA, terminal-first, código abierto y multi-proveedor.

- **Slide 2 – Qué es un LLM**
  Definición de Large Language Model, funcionamiento básico, ejemplos de proveedores y capacidades para desarrolladores (escribir/depurar código, refactorización, tests).

- **Slide 3 – Qué es OpenCode**
  Definición de OpenCode como agente de código abierto, multi-proveedor, con interfaz TUI de terminal, soporte de >75 LLMs y posibilidad de usar modelos locales como Ollama.

- **Slide 4 – Requisitos**
  Listado de terminales recomendados (WezTerm, Alacritty, Ghostty, Kitty, VS Code), software necesario (Node.js, Homebrew, Chocolatey, etc.) y claves API (OpenCode Zen, Anthropic, OpenAI, Google Gemini, Ollama).

- **Slide 5 – Instalación**
  Comandos ejemplos:
  - Script rápido con `curl`.
  - Instalación global via `npm`, `bun`, `pnpm`.
  - Instalación con Homebrew en macOS/Linux.
  - Instalación en Windows con Chocolatey/Scoop.

- **Slide 6 – Configuración inicial**
  Pasos:
  - Conectar proveedor de IA con `/connect`.
  - Alternativa con variables de entorno (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, etc.).
  - Inicializar proyecto con `/init` y crear `AGENTS.md` con stack, convención y reglas.

- **Slide 7 – Cómo se usa**
  Flujo:
  - Ir al directorio del proyecto.
  - Ejecutar `opencode`.
  - Prompts tipo: "explica autenticación", "añade modo oscuro", "arregla este error", "refactoriza este servicio".
  - Atajos: Tab (Plan/Build), `/undo`, `/redo`, `/init`, `@` buscar archivo, `Ctrl+Esc` vista dividida.

- **Slide 8 – Modos de trabajo**
  Comparativa:
  - **Modo Plan**: solo lectura, analiza código, propone estrategia.
  - **Modo Build**: acceso lectura/escritura y ejecución de comandos.
  Recomendación: Plan → revisar → Build → `/undo` si hace falta.

- **Slide 9 – Buenas prácticas**
  Consejos para prompts concretos, flujo de trabajo 4 pasos (Explorar, Planificar, Implementar, Verificar), y recomendaciones (usar AGENTS.md, revisar cambios, no subir keys).

- **Slide 10 – Recursos**
  Enlaces a:
  - Documentación oficial (`opencode.ai/docs`).
  - GitHub (`github.com/opencode-ai/opencode`).
  - Web oficial (`opencode.ai`).
  - Tutoriales en español (ej: WebReactiva).
  - Guías Ollama y modelos (`models.dev`).

***
## Organización del proyecto
Dado que es una presentación simple, la organización es mínima:

- Raíz del proyecto:
  - `opencode_presentacion_galego.html` (archivo de origen con CSS y JS embebido).
  - `context.md` (este fichero, documentación del objetivo y estructura).

Si se quisiera evolucionar a segunda fase:

- Separar CSS/JS en ficheros externos (`/css`, `/js`).
- Convertir cada slide en componente de un framework (Astro, React, etc.).
- Añadir soporte para exportar a PDF.

***
## Criterios de diseño y UX
- **Tema oscuro profesional**:
  - Fondo tipo GitHub dark, bordes suaves, colores de acento (azul, verde, naranja, púrpura).
  - Uso coherente de tarjetas, etiquetas y badges para categorizar información.

- **Tipografía**:
  - Texto principal con Inter.
  - Código con JetBrains Mono.

- **Legibilidad y jerarquía**:
  - Titulares grandes y claros por diapositiva.
  - Subtítulos y bloques de énfasis para ideas clave.
  - Listas con iconos y colores en presentaciones en directo.

- **Accesibilidad básica**:
  - Contraste suficiente en tema oscuro.
  - Tamaños de fuente adecuados para aula/proyección.
  - Navegación teclado (flechas/espacio) sin depender de ratón.

- **Responsividad**:
  - Enfoque en escritorio/proyección, con adaptabilidad a tablets.

***
## Criterios de calidad de código
- **Claridad sobre optimización**:
  - CSS con organización por secciones (slides, cards, navegación).
  - JS compacto y centrado en estado + eventos.

- **Mantenibilidad**:
  - Cada slide independiente para añadir/quitar fácilmente.
  - Clases consistentes (`slide-header`, `slide-body`, `card`, `feature-list`).

- **Pedagogía**:
  - Código como ejemplo para alumnos: presentación con HTML/CSS/JS y arquitectura limpia.