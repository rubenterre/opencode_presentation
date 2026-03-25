# OpenCode Presentation

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Descripción

Este proyecto es una presentación interactiva desarrollada con **Astro** para explicar **OpenCode**, un agente de codificación open-source para terminal. Está diseñado específicamente para alumnos en prácticas del **Certificado de Profesionalidad IFCD0110** en el **Centro de Formación Captioma**.

La presentación adopta un formato de slideshow a pantalla completa, con navegación por teclado y ratón, explicando conceptos clave sobre LLMs, instalación y uso de OpenCode, modos de trabajo y mejores prácticas.

## Tecnologías Utilizadas

- **Astro**: Framework para construcción de sitios web estáticos y dinámicos.
- **HTML5**: Estructura semántica de la presentación.
- **CSS3**: Estilos modernos con variables CSS, flexbox y grid.
- **JavaScript**: Navegación interactiva y gestión de estado.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/rubenterre/opencode_presentation.git
   cd opencode_presentation
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:4321` (o el puerto indicado).

## Uso

- **Navegación**: Usa las flechas izquierda/derecha del teclado o los botones "Anterior/Siguiente" para moverte entre diapositivas.
- **Espacio**: Avanza a la siguiente diapositiva.
- **Pantalla completa**: Recomendado para presentaciones en aula.

## Estructura del Proyecto

```
opencode_presentation/
├── src/
│   ├── components/layout/     # Componentes de diapositivas (Slide01.astro a Slide10.astro)
│   ├── layouts/               # Layout principal (Layout.astro)
│   ├── pages/                 # Página principal (index.astro)
│   ├── lib/                   # Script de navegación (script.js)
│   └── styles/                # Estilos globales (global.css)
├── public/                    # Assets estáticos
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Dependencias y scripts
└── README.md                  # Este archivo
```

## Contenido de la Presentación

La presentación consta de 10 diapositivas que cubren:

1. **Portada**: Introducción a OpenCode y sus características.
2. **¿Qué es un LLM?**: Explicación de Modelos de Lenguaje Grande.
3. **¿Qué es OpenCode?**: Definición y filosofía del agente.
4. **Requisitos**: Terminales, software y APIs necesarias.
5. **Instalación**: Pasos para instalar OpenCode en diferentes sistemas.
6. **Configuración Inicial**: Conexión de proveedores y creación de AGENTS.md.
7. **Uso Diario**: Comandos básicos y ejemplos de prompts.
8. **Modos de Trabajo**: Plan vs Build.
9. **Mejores Prácticas**: Consejos para uso efectivo y seguridad.
10. **Recursos**: Enlaces a documentación y comunidades.

## Objetivos Educativos

- Comprender conceptos básicos de IA y LLMs.
- Aprender a instalar y configurar herramientas de desarrollo.
- Practicar el uso de agentes de codificación en entornos reales.
- Desarrollar habilidades en navegación de terminal y prompts efectivos.

## Contribuciones

Este proyecto es educativo y puede ser adaptado por instructores. Para sugerencias o mejoras, abre un issue en el repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Centro de Formación Captioma** - Certificado de Profesionalidad IFCD0110
