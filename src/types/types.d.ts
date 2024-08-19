import { Todo } from "../components/Todo"
import { TODO_FILTERS } from "../consts"

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type todoId = Pick<Todo, 'id'>
export type todoTitle = Pick<Todo, 'title'>
export type todoCompleted = Pick<Todo, 'completed'>

export type FilterValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type FilterSelectedType = {
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export type TodoContextType = {
  state: Todo[],
  filterTodo: FilterValues,
  filteredTodos: Todo[],
  handleFilterChange: ({ filterSelected }: FilterSelectedType) => void,
  handleAddTodo: (title: todoTitle) => void,
  handleEditTodo: ({ id, title }: Pick<Todo, 'id' | 'title'>) => void,
  handleCompletedTodo: (todo: Todo) => void,
  handleRemoveTodo: (id: todoId) => void,
  handleRemoveCompleted: () => void
}