import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea..."
        className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  )
}

//TaskForm es una funcion que devuelve JSX. Se usa como si fuera una etiqueta <TaskForm />. Es un componente

//Props: onAdd = {addTask}. Lo que se escribe como atrivuto le llega al hijo como argumento.
// export default function TaskForm({ onAdd }) { ... }
// La App asi le pasa a la funcion TaskForm una funcion, y esta la llama cuando el usuario envia el formulario
//
// Entonces los datos van del padre al hijo, y el hijo avisa al padre llamando a esa funcion
//
//Input controlado.
/*
jsx
<input value={text} onChange={(e) => setText(e.target.value)} />

El valor del input vive en el estado text. Cada tecla dispara onChange, que actualiza el estado, y React redibuja el input con ese valor. React manda, no el navegador.

e.preventDefault(). Un formulario HTML por defecto recarga la página al enviarse. Esta línea lo evita.

Inmutabilidad.

jsx
setTasks([...tasks, nuevaTarea])

...tasks copia todas las tareas actuales a un array nuevo y le suma la nueva al final. Nunca uses tasks.push(...): React no detecta el cambio si modificás el array original.

Date.now(). Devuelve un número (los milisegundos actuales), que usamos como id único de forma simple.*/