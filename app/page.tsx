'use client'

import { useState } from 'react'
import { Task } from '@/types/task'
import TaskCard from '@/components/TaskCard'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  // Bug 1: direct state mutation — React won't detect the change and won't re-render
  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description: '',
      completed: false,
      createdAt: new Date()
    }
    tasks.push(newTask) // Bug 1: direct mutation
    setTasks(tasks)    // Bug 1: same reference, React won't re-render
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    handleAddTask(inputValue.trim())
    setInputValue('')
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Task Manager</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Agregar
        </button>
      </form>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-8">
            No hay tareas. ¡Agrega una!
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </main>
  )
}
