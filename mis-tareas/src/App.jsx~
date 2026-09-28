// App: en mayuscula le dice a React que es un componente. Es una funcion normal de Js
// return (...) devuelve JSX que es lo q se va a dibujar en pantalla
//className es el equivalente de class en HTML.

//la pantalla depende del estado

import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'

const FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'pending', label: 'Pendientes' },
  { key: 'done', label: 'Hechas' },
]

//no cambia


export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, done: false }])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const visible = tasks.filter((t) => {
    if (filter === 'done') return t.done
      if (filter === 'pending') return !t.done
        return true
  })

  const pendingCount = tasks.filter((t) => !t.done).length

  const clearDone = () => {
    setTasks(tasks.filter((t) => !t.done))
  }

  // setTasks( ... )

  // Recibe ese array nuevo y reemplaza el estado. React ve que cambió y redibuja la pantalla.
/*
  const clearDone = () => { ... }

  Esto es una función flecha guardada en una variable. Es lo mismo que:

  function clearDone() {
    setTasks(tasks.filter((t) => !t.done))
  }

  Está envuelta en una función para que no se ejecute al instante, sino cuando la llames. Por eso en el botón va onClick={clearDone}, sin paréntesis: le pasás la función para que React la llame al hacer click.*/

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
    <div className="mx-auto max-w-md space-y-5">
    <h1 className="text-3xl font-bold text-gray-900">Mis tareas</h1>

    <TaskForm onAdd={addTask} />

    <div className="flex gap-2">
    {FILTERS.map((f) => (
      <button
      key={f.key}
      onClick={() => setFilter(f.key)}
      className={
        'rounded-full px-3 py-1 text-sm ' +
        (filter === f.key
        ? 'bg-blue-600 text-white'
        : 'bg-white text-gray-600 hover:bg-gray-200')
      }
      >
      {f.label}
      </button>
    ))}
    </div>

    {visible.length === 0 ? (
      <p className="text-center text-gray-500">No hay tareas para mostrar.</p>
    ) : (
      <ul className="space-y-2">
      {visible.map((task) => (
        <TaskItem
        key={task.id}
        task={task}
        onToggle={toggleTask}
        onDelete={deleteTask}
        />
      ))}
      </ul>
    )}


    <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500">
    {pendingCount} {pendingCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}
    </p>
    <button
    onClick={clearDone}
    className="text-sm text-red-500 hover:text-red-700"
    >
    Limpiar hechas
    </button>
    </div>

    </div>
    </div>
  )
}

/*
 * tasks es el valor actual (la lista).
 * setTasks es la función para cambiarlo.
 * Lo que pasás a useState(...) es el valor inicial.
 * Cada vez que llamás a setTasks, React vuelve a ejecutar el componente y redibuja la pantalla con el valor nuevo. Todavía no la usamos, pero en el paso 4 sí.
 */


// .map recorre el array y devuelve un <li> por cada tarea. Las llaves {} sirven para meter JavaScript dentro del JSX.


//key: React necesita un key único en cada elemento de una lista para saber cuál es cuál cuando algo cambia. Usamos el id de la tarea.