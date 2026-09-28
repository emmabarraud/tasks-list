export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4"
        />
        <span className={task.done ? 'text-gray-400 line-through' : 'text-gray-800'}>
          {task.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-sm text-red-500 hover:text-red-700"
      >
        Borrar
      </button>
    </li>
  )
}