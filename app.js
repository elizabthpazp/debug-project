// ============================================================
//  app.js — Lista de Tareas
//  Generado con IA como apoyo del curso
// ============================================================

// Estado de la aplicación
let tasks = [];

// Referencias al DOM
const taskInput = document.getElementById('task-input');
const addBtn    = document.getElementById('add-btn');
const taskList  = document.getElementById('task-list');

// ---- Inicialización ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

// ---- Funciones principales ---------------------------------

/**
 * Agrega una nueva tarea al array y limpia el input.
 * Bug 1: no se llama renderTasks() al final, así que la lista
 *        no se actualiza visualmente después de agregar.
 */
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = '';

  // renderTasks() debería llamarse aquí para reflejar el cambio,
  // pero se omitió — la lista nunca se actualiza al agregar.
}

/**
 * Renderiza la lista completa de tareas en el DOM.
 * Bug 2: deleteTask y toggleTask se referencian desde onclick
 *        en strings de innerHTML, pero no están en window,
 *        por lo que el navegador no puede encontrarlas y lanza
 *        ReferenceError al hacer clic en Eliminar o en la tarea.
 */
function renderTasks() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="empty-msg">No hay tareas todavía.</li>';
    return;
  }

  tasks.forEach((task) => {
    taskList.innerHTML += `
      <li class="task ${task.completed ? 'completed' : ''}">
        <span onclick="toggleTask(${task.id})">${task.text}</span>
        <button onclick="deleteTask(${task.id})">Eliminar</button>
      </li>
    `;
  });
}

/**
 * Marca o desmarca una tarea como completada.
 * Alterna la clase 'completed', pero el CSS usa '.task.complete'
 * (sin 'd'), así que el cambio visual nunca se aplica (Bug 3).
 */
function toggleTask(id) {
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  renderTasks();
}

/**
 * Elimina una tarea por su id.
 * Bug 2: esta función existe en el scope del módulo pero no en
 *        window, así que el onclick generado en innerHTML no
 *        la encuentra cuando el usuario hace clic en "Eliminar".
 */
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  renderTasks();
}
