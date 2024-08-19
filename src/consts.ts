export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = [
  {
    id: 1,
    name: 'All',
    value: 'all'
  },
  {
    id: 2,
    name: 'Active',
    value: 'active'
  },
  {
    id: 3,
    name: 'Completed',
    value: 'completed'
  }
] as const


