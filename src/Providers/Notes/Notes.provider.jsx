import React, { useState, useContext, useCallback, useEffect } from 'react'
import { storage } from '../../Utils/storage'

export const NotesContext = React.createContext(null)

function useNotes() {
  const context = useContext(NotesContext)
  if (!context) {
    throw new Error(`Can't use "useNotes" without an AuthProvider!`)
  }
  return context
}

// eslint-disable-next-line react/prop-types
function NotesProvider({ children }) {
  const [notes, setNotes] = useState(storage.get('Notes') || [])
  const [searchParam, setSearchParams] = useState('')

  useEffect(() => {
    const persistentsNotes = storage.get('Notes') || []
    setNotes(persistentsNotes)
  }, [])

  const addNote = useCallback((note) => {
    const storedNotes = storage.get('Notes') || []
    storedNotes.push(note)
    storage.set('Notes', storedNotes)
    setNotes(storedNotes)
  }, [])

  const archiveNote = useCallback((note) => {
    const storedNotes = storage.get('Notes') || []
    const noArchivedNotes = storedNotes.map((item) =>
      item.id == note.id ? { ...note, archived: true } : item
    )
    storage.set('Notes', noArchivedNotes)
    setNotes(noArchivedNotes)
  }, [])

  const publishNote = useCallback((note) => {
    const storedNotes = storage.get('Notes') || []
    const noArchivedNotes = storedNotes.map((item) =>
      item.id == note.id ? { ...note, archived: false } : item
    )
    storage.set('Notes', noArchivedNotes)
    setNotes(noArchivedNotes)
  }, [])

  const editNote = useCallback((note) => {
    const editedNotes = notes.map((item) => (item.id !== note.id ? item : note))
    storage.set('Notes', editedNotes)
    setNotes(editedNotes)
  })

  return (
    <NotesContext.Provider
      value={{
        notes,
        searchParam,
        setSearchParams,
        addNote,
        editNote,
        archiveNote,
        publishNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export { useNotes }
export default NotesProvider
