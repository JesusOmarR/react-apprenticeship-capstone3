import React, { useState } from 'react'
import { ModalContent, Modal } from './EditNotes.styled'
import { useNotes } from '../../../Providers/Notes'

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
      <Modal>
        <ModalContent>
          <textarea
            value={editedNote.text}
            name="text"
            onChange={onEditInputs}
            rows="5"
            cols="50"
            role="text-area"
          >
            Write something here
          </textarea>
          <div className="buttons-container">
            <button className="btn save-btn" onClick={onSave} role="save">
              save
            </button>
            <button onClick={onClose} className="btn close-btn">
              Close Modal
            </button>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditNotes
