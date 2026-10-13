import { Task } from '@/types/task'

interface TaskCardProps {
  task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`font-semibold text-lg ${
            task.completed ? 'line-through text-gray-400' : 'text-gray-900'
          }`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 text-sm mt-1">{task.description}</p>
          )}
          {/* Bug 3: task.createdAt is actually a string from the API, not a Date */}
          {/* Calling .toLocaleDateString() on a string throws: "toLocaleDateString is not a function" */}
          <p className="text-xs text-gray-400 mt-2">
            Creado: {task.createdAt.toLocaleDateString('es-ES')}
          </p>
        </div>
        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
          task.completed
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {task.completed ? 'Completada' : 'Pendiente'}
        </span>
      </div>
    </div>
  )
}
