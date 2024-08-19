import { Todo } from "../types/types"
import { useTitle } from "../hooks/useTodo"
import { useTodoContext } from "../contexts/useTodoContext"

interface Props {
  TodoValue: Pick<Todo, 'id' | 'title'>
  onCancel: () => void
}

export const EditTodo: React.FC<Props> = ({ TodoValue, onCancel }) => {

  const { value, onChange } = useTitle(TodoValue)
  const { handleEditTodo } = useTodoContext()

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditTodo({ id: TodoValue.id, title: value.title })
      onCancel()
    }
  }

  return (
    <>
      <input
        className="Main-edit"
        type="text"
        value={value.title}
        onChange={onChange}
        onKeyDown={handleOnKeyDown}
        onBlur={onCancel}
        autoFocus
      />
    </>
  )
}