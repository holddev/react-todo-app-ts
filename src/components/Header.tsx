import { useTodoContext } from "../contexts/useTodoContext.ts"
import { useTitle } from "../hooks/useTodo.ts"
import './Header.scss'

export const Header: React.FC = () => {

  const { handleAddTodo } = useTodoContext()
  const { value, onChange, onKeyDown } = useTitle({ title: '' })

  return (
    <>
      <header className="Header">
        <input
          className="Header-input"
          type="text"
          placeholder="¿Quieres hacer algo?"
          value={value.title}
          onChange={onChange}
          onKeyDown={(e) => { onKeyDown(e, handleAddTodo) }}
          autoFocus
        />
      </header>
    </>
  )
}