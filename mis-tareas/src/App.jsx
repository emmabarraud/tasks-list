// App: en mayuscula le dice a React que es un componente. Es una funcion normal de Js
// return (...) devuelve JSX que es lo q se va a dibujar en pantalla
//className es el equivalente de class en HTML.

//la pantalla depende del estado

import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', done: false },
    { id: 2, text: 'Instalar Tailwind', done: true },
    { id: 3, text: 'Armar mi primera app', done: false },
    { id: 4, text: 'Subir el codigo a github', done: false},
  ])

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
    <div className="mx-auto max-w-md space-y-5">
    <h1 className="text-3xl font-bold text-gray-900">Mis tareas</h1>

    <ul className="space-y-2">
    {tasks.map((task) => (
      <li key={task.id} className="rounded-lg bg-white p-3 shadow-sm">
      {task.text}
      </li>
    ))}
    </ul>
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