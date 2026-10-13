import { NextRequest, NextResponse } from 'next/server'
import { Task } from '@/types/task'

// In-memory store (simulating a DB)
const tasks: Task[] = [
  {
    id: '1',
    title: 'Revisar código del proyecto',
    description: 'Hacer una revisión completa del código generado por IA',
    completed: false,
    createdAt: new Date('2024-01-15') as unknown as Date
  }
]

export async function GET() {
  return NextResponse.json(tasks.map(t => ({
    ...t,
    createdAt: t.createdAt instanceof Date ? t.createdAt.toISOString() : t.createdAt
  })))
}

// Bug 2: missing 'async' keyword — await inside a sync function throws at runtime
export function POST(request: NextRequest) {
  const body = request.json() // This returns a Promise, not the body
  // Trying to use body.title will be undefined because body is a Promise
  const { title, description } = body as any

  const newTask: Task = {
    id: Date.now().toString(),
    title: title || 'Nueva tarea',
    description: description || '',
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask)
  return NextResponse.json(newTask, { status: 201 })
}
