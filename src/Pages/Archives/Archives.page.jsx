import React, { useState, useEffect } from 'react'
import { useNotes } from '../../Providers/Notes'
import Notes from '../../Components/Notes'
import { ArchivesContainer, NotesContainer } from './Archives.styled'
function Archives() {
  const [archived, setArchived] = useState([])
  const { notes } = useNotes()

  useEffect(() => {
    setArchived(notes.filter((n) => n.archived === true))
  }, [notes])

  return (
    <ArchivesContainer>
      <NotesContainer>
        {archived.length > 0 ? (
          archived.map((note) => (
            <div key={note.id}>
              <Notes note={note} />
            </div>
          ))
        ) : (
          <div className="advice-container">
            There are no notes; please create a new one using the creation note
            input
          </div>
        )}
      </NotesContainer>
    </ArchivesContainer>
  )
}

export default Archives
