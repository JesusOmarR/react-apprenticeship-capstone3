import React, { useState } from 'react'
import { ModalContent } from './EditNotes.styled'
import { useNotes } from '../../../Providers/Notes'

const MODAL_STYLES = {
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '10px',
  zIndex: 1000,
  borderRadius: '7px',
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .6)',
  zIndex: 1000,
}
function EditNotes({ onClose, open, data }) {
  const [editedNote, setEditedNote] = useState({
    color: data?.color,
    text: data?.text,
    archived: data?.archived,
    id: data?.id,
  })
  const { editNote } = useNotes()

  const onEditInputs = (e) => {
    setEditedNote({
      ...editedNote,
      [e.target.name]: e.target.value,
    })
  }

  const onSave = () => {
    editNote(editedNote)
    onClose()
  }

  if (!open) return null
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <ModalContent>
          <textarea
            value={editedNote.text}
            name="text"
            onChange={onEditInputs}
            rows="5"
            cols="50"
          >
            Write something here
          </textarea>
          <button onClick={onSave}>save</button>
          <button onClick={onClose}>Close Modal</button>
        </ModalContent>
      </div>
    </>
  )
}

export default EditNotes
