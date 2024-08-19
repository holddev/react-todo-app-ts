import { Todo } from "./Todo.tsx";
import { useTodoContext } from "../contexts/useTodoContext.ts";
import './Todos.scss'

export const Todos: React.FC = () => {
  const { filteredTodos } = useTodoContext()
  const isActive = (filteredTodos.length !== 0) ? 'active' : ''

  return (
    <main className={`View-main Main ${isActive}`}>
      <ul className="Main-ul">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </main>
  )
}