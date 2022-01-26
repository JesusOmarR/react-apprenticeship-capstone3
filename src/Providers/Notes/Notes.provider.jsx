import React, { useState, useEffect, useContext, useCallback } from 'react'
import { storage } from '../../Utils/storage'

export const NotesContext = React.createContext(null)

function useNotes() {
  const context = useContext(NotesContext)
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`)
  }
  return context
}

// eslint-disable-next-line react/prop-types
function NotesProvider({ children }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const persistentsNotes = storage.get('Notes')
    setNotes(persistentsNotes)
  }, [])

  const addNote = useCallback((note) => {
    console.log(note)
  }, [])

  const archiveNote = useCallback((note) => {
    console.log(note)
  }, [])

  const editNote = useCallback((note) => {
    console.log(note)
  }, [])

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, archiveNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export { useNotes }
export default NotesProvider
