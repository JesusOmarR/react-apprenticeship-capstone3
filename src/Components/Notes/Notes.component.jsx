import React, { useState } from 'react'
import { NotesDiv } from './NotesComponent.styled'
const EditNotes = React.lazy(() => import('./Modals/EditNotes.modal'))
import { useNotes } from '../../Providers/Notes'
import ArchiveIcon from '../../Assets/archive-icon.png'
import publishIcon from '../../Assets/publish.png'
import editIcon from '../../Assets/editing.png'
const ColorPicker = React.lazy(() => import('../../UI/ColorPicker/ColorPIcker'))

function NotesComponent({ note }) {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState(note.color)

  const { archiveNote, publishNote, editNote } = useNotes()

  const onClose = () => {
    setIsOpen(false)
  }

  const editColor = (color) => {
    setColor(color)
    editNote({
      ...note,
      color: color,
    })
  }

  const onClickArchive = (e) => {
    e.preventDefault()
    archiveNote(note)
  }

  const onClickPublish = (e) => {
    e.preventDefault()

    publishNote(note)
  }

  return (
    <>
      <EditNotes data={note} onClose={onClose} open={isOpen}></EditNotes>
      <NotesDiv color={color}>
        <p>{note.text}</p>
        <div className="options-container">
          <div className="options">
            {!note.archived ? (
              <img src={ArchiveIcon} onClick={onClickArchive} alt="archive" />
            ) : (
              <img src={publishIcon} onClick={onClickPublish} role="publish" />
            )}
            <img src={editIcon} onClick={() => setIsOpen(true)} alt="edit" />
            <ColorPicker color={color} onChange={editColor} />
          </div>
        </div>
      </NotesDiv>
    </>
  )
}

export default NotesComponent
