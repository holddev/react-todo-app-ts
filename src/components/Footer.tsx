import { FILTERS_BUTTONS, TODO_FILTERS } from "../consts.ts"
import { useTodoContext } from "../contexts/useTodoContext.ts"
import './Footer.scss'

export const Footer: React.FC = () => {

  const { state, handleRemoveCompleted, handleFilterChange, filterTodo } = useTodoContext()

  const countCompleted = state.filter(({ completed }) => completed).length
  const countPending = state.length - countCompleted
  const isActive = (countCompleted !== 0 && filterTodo !== TODO_FILTERS.ACTIVE) ? 'active' : ''

  return (
    <>
      <footer className="Footer">
        <span className="Footer-span">Tareas pendientes: {countPending}</span>
        <ul className="Footer-ul">
          {
            FILTERS_BUTTONS.map(({ id, name, value }) => (
              <li className="Footer-li" key={id}>
                <button
                  className={`Footer-button ${value === filterTodo ? 'active' : ''}`}
                  onClick={() => { handleFilterChange({ filterSelected: value }) }}>
                  {name}
                </button>
              </li>
            ))
          }
        </ul>
        <button
          className={`Footer-button Footer-button--delete ${isActive}`}
          onClick={handleRemoveCompleted}>Delete completed
        </button>
      </footer>
    </>
  )
}