import React, { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { FilterSelectedType, FilterValues, Todo, TodoContextType, todoId, todoTitle } from "../types/types";
import { TODO_FILTERS } from "../consts";

type Props = {
  children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider: React.FC<Props> = ({ children }) => {

  const LOCAL_STORAGE_KEY = 'todos'
  // Creando un item en el LocalStorage
  const getInitialTodos = (): Todo[] => {
    try {
      const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedTodos) {
        return JSON.parse(storedTodos)
      }
      return []
    } catch (error) {
      console.error("Error loading todos from localStorage:", error)
      return []
    }
  }

  const [state, dispatch] = useReducer(todoReducer, getInitialTodos())
  const [filterTodo, SetFilterTodo] = useState<FilterValues>(TODO_FILTERS.ALL)

  // Modificando el item del LocalStorage si hay algun cambio en los todos
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const filteredTodos = state.filter((todo => {
    if (filterTodo === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterTodo === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  }))
  function handleFilterChange({ filterSelected }: FilterSelectedType) {
    SetFilterTodo(filterSelected)
  }
  function handleAddTodo(title: todoTitle) {
    if (title.title.trim()) {
      dispatch({ type: "ADD_TODO", payload: { title } })
    }
  }
  function handleEditTodo(params: Pick<Todo, 'id' | 'title'>) {
    const { id, title } = params
    if (title.trim()) {
      dispatch({ type: "EDIT_TODO", payload: { id, title } })
    } else {
      dispatch({ type: "DELETE_TODO", payload: { id: { id } } })
    }
  }
  function handleCompletedTodo(todo: Todo) {
    dispatch({ type: "TOGGLE_TODO", payload: { todo } })
  }
  function handleRemoveTodo(id: todoId) {
    dispatch({ type: "DELETE_TODO", payload: { id } })
  }
  function handleRemoveCompleted() {
    dispatch({ type: "DELETE_COMPLETED" })
  }

  return (
    <TodoContext.Provider
      value={{
        state,
        filterTodo,
        filteredTodos,
        handleFilterChange,
        handleAddTodo,
        handleEditTodo,
        handleCompletedTodo,
        handleRemoveTodo,
        handleRemoveCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
