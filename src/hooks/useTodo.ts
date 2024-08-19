import { useState } from "react"
import { todoTitle } from "../types/types"

type callbackType = (title: todoTitle) => void

export const useTitle = (title: todoTitle) => {
  const [value, setValue] = useState<todoTitle>(title)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = { title: e.target.value }
    setValue(currentValue)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, callback: callbackType) => {
    if (e.key !== 'Enter') return

    callback({ title: value.title })
    setValue({ title: '' })

  }

  return ({ value, onChange, onKeyDown })
}

export const useEditMode = () => {
  const [editMode, setEditMode] = useState(false)

  const startEditing = () => setEditMode(true)
  const stopEditing = () => setEditMode(false)

  return {
    editMode,
    startEditing,
    stopEditing
  }
}