# Task Manager — Proyecto de Debug

Esta es una aplicación de gestión de tareas generada por IA con Next.js 14 y Tailwind CSS.

**Tu misión:** encontrar y corregir 3 bugs reales que tiene este proyecto.

---

## Cómo empezar

```bash
npm install
npm run dev
```

---

## Los 3 problemas que debes encontrar

1. **Al agregar una tarea, no aparece en la lista** — el formulario funciona y no da error, pero la tarea nunca se muestra.

2. **La API devuelve error 500 al crear una tarea** — hacer un `POST /api/tasks` con un body JSON falla en runtime.

3. **La página de tareas crashea con un error de runtime** — al cargar tareas desde la API, la app explota con un error de JavaScript.

---

## Cómo trabajar

Usa tu asistente de IA en tu editor (Cursor, GitHub Copilot, etc.) para:

1. Diagnosticar cada problema — ¿cuál es la causa raíz?
2. Explicar por qué ocurre
3. Escribir la corrección

No busques los bugs en el README: están en el código. Léelo, reproduce el error y analízalo con tu IA.
