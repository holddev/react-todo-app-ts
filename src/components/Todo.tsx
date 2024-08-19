import type { Todo as todoType } from '../types/types.d.ts'
import { useTodoContext } from '../contexts/useTodoContext.ts'
import { EditTodo } from './EditTodo.tsx'
import { useEditMode } from '../hooks/useTodo.ts'
import { CloseSVG } from './Icons.tsx'

type Props = {
  todo: todoType
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const { handleCompletedTodo, handleRemoveTodo } = useTodoContext()
  const { id, completed, title } = todo
  const { editMode, startEditing, stopEditing } = useEditMode()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodo: todoType = {
      ...todo,
      completed: e.target.checked
    }
    handleCompletedTodo(updatedTodo)
  }

  return (
    <li onDoubleClick={startEditing} className='Main-li'>
      <input className='Main-input' type="checkbox" onChange={handleChange} checked={completed} />
      {
        editMode ?
          <EditTodo TodoValue={{ id, title }} onCancel={stopEditing} /> :
          <label className='Main-label'>{title}</label>
      }
      <button
        className='Main-button'
        onClick={() => { handleRemoveTodo({ id }) }} >
        <CloseSVG className='Main-svg' />
      </button>
    </li>
  )
}