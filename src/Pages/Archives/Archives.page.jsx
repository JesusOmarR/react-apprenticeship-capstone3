import React, { useState, useEffect } from 'react'
import { useNotes } from '../../Providers/Notes'
const Notes = React.lazy(() => import('../../Components/Notes'))
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
        <React.Suspense fallback={<div>...loading</div>}>
          {archived.length > 0 ? (
            archived.map((note) => (
              <div key={note.id}>
                <Notes note={note} />
              </div>
            ))
          ) : (
            <div className="advice-container">
              You don&apos;t have archived notes.
            </div>
          )}
        </React.Suspense>
      </NotesContainer>
    </ArchivesContainer>
  )
}

export default Archives
