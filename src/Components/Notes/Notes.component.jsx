import React, { useState } from 'react'
import { NotesDiv } from './NotesComponent.styled'
import EditNotes from './Modals/EditNotes.modal'
import { useNotes } from '../../Providers/Notes'

function NotesComponent({ note }) {
  const [isOpen, setIsOpen] = useState(false)

  const { archiveNote } = useNotes()

  const onClose = () => {
    setIsOpen(false)
  }

  const onClickArchive = (e) => {
    e.preventDefault()
    archiveNote(note)
  }

  return (
    <>
      <EditNotes data={note} onClose={onClose} open={isOpen}></EditNotes>
      <NotesDiv color={note.color}>
        <p>{note.text}</p>
        <div className="options-container">
          <div className="options">
            {!note.archived ? (
              <button onClick={onClickArchive}>archivar</button>
            ) : (
              <button onClick={onClickArchive}>regresar</button>
            )}
            <button onClick={() => setIsOpen(true)}>editar</button>fondo
          </div>
        </div>
      </NotesDiv>
    </>
  )
}

export default NotesComponent
