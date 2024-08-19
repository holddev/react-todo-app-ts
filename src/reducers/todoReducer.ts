import { Todo, todoId, todoTitle } from "../types/types"

type editValue = Pick<Todo, 'id' | 'title'>

type actionType =
  | { type: 'ADD_TODO', payload: { title: todoTitle } }
  | { type: 'TOGGLE_TODO', payload: { todo: Todo } }
  | { type: 'DELETE_TODO', payload: { id: todoId } }
  | { type: 'EDIT_TODO', payload: editValue }
  | { type: 'DELETE_COMPLETED' }

export const todoReducer = (state: Todo[] = [], action: actionType) => {
  const { type } = action

  switch (type) {
    case 'ADD_TODO': {
      const { title } = action.payload
      const newTodo = {
        id: crypto.randomUUID(),
        ...title,
        completed: false
      }
      return [...state, newTodo]
    }

    case 'EDIT_TODO': {
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title
          }
        }
        return todo
      })
      return newTodos
    }

    case 'TOGGLE_TODO': {
      const { id, completed } = action.payload.todo
      const newTodos = state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })

      return [...newTodos]
    }

    case 'DELETE_TODO': {
      const { id } = action.payload.id
      const newTodos = state.filter((todo) => todo.id !== id)
      return [...newTodos]
    }

    case 'DELETE_COMPLETED': {
      const newTodos = state.filter(({ completed }) => !completed)
      return [...newTodos]
    }
    default:
      return state
  }
}