# Exposición del catálogo de productos a través de endpoints REST

El sistema debe exponer un catálogo de productos a través de endpoints REST. Los productos tienen un nombre, una descripción y un precio. Los endpoints deben validar la entrada y manejar los errores de manera centralizada. Los datos se almacenan en memoria detrás de un repositorio.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construccion de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición y validación de endpoints

**Objetivo:** Definir y validar los endpoints REST para el catálogo de productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crear un endpoint para listar todos los productos.
- Crear un endpoint para obtener un producto por su ID.
- Validar que el body de las requests cumpla con el esquema definido usando Zod.

**Entregable:** Endpoints REST definidos y validados para listar y obtener productos.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los datos se almacenan en memoria detrás de un repositorio.
- Usa Zod para validar el body de las requests.

</details>

### Fase 2: Manejo de errores

**Objetivo:** Implementar el manejo centralizado de errores en los endpoints REST.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Manejar los errores de validación y los errores de producto no encontrado.
- Asegurar que las pruebas con Jest cubran los casos de error 400 y 404.

**Entregable:** Endpoints REST con manejo centralizado de errores para validación y producto no encontrado.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los datos se almacenan en memoria detrás de un repositorio.
- Usa Jest para cubrir los casos de error 400 y 404.

</details>

### Fase 3: Refactorización y optimización

**Objetivo:** Refactorizar y optimizar el código de los endpoints REST.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Refactorizar el código para mejorar la legibilidad y mantenibilidad.
- Optimizar el rendimiento de los endpoints REST.

**Entregable:** Endpoints REST refactorizados y optimizados.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los datos se almacenan en memoria detrás de un repositorio.
- Busca oportunidades para mejorar la legibilidad y mantenibilidad del código.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints REST y cuál es su propósito en este reto?
- **paraQueSirve**: ¿Para qué sirven los endpoints REST en el contexto de este reto?
- **comoSeUsa**: ¿Cómo se usan los endpoints REST para exponer el catálogo de productos?
- **erroresComunes**: ¿Cuáles son los errores comunes que deben manejarse en los endpoints REST?

## Criterios de Evaluacion

- Definición y validación de endpoints REST para el catálogo de productos.
- Manejo centralizado de errores en los endpoints REST.
- Refactorización y optimización del código de los endpoints REST.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
