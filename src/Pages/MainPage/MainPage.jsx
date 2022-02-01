import React, { useState, useEffect } from 'react'
import {
  NotesContainer,
  MainContainer,
  CreateNoteContainer,
} from './MainPage.styled'
import { useNotes } from '../../Providers/Notes'
import { v4 as uuid } from 'uuid'
const Notes = React.lazy(() => import('../../Components/Notes'))
import ColorPIcker from '../../UI/ColorPicker/ColorPIcker'

function MainPage() {
  const { notes, addNote, searchParam } = useNotes()

  const [note, setNote] = useState({
    color: 'white',
    text: '',
    archived: false,
  })

  const [publishNote, setPublishNotes] = useState([])
  const [noFoundMsg, setNoFoundMsg] = useState(null)

  const { text, color } = note

  useEffect(() => {
    const searchedNotes = notes.filter(
      (n) => n.text.includes(searchParam) && !n.archived
    )
    setPublishNotes(searchedNotes)
    if (!searchedNotes.length > 0 && searchParam.length > 0) {
      setNoFoundMsg('There are no match results. Try another search.')
      return
    }
    setNoFoundMsg(null)
  }, [searchParam, notes])

  const onCreateNote = () => {
    if (!text) {
      return
    }

    addNote({
      ...note,
      id: uuid(),
    })
    setNote({
      color: 'white',
      text: '',
      archived: false,
    })
  }

  const onChangeinput = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    })
  }

  const changeColor = (color) => {
    setNote({
      ...note,
      color: color,
    })
  }

  return (
    <MainContainer>
      <CreateNoteContainer color={color}>
        <input
          placeholder="Take a note .."
          value={text}
          onChange={onChangeinput}
          name="text"
        />
        <div className="options-create">
          <div>
            note color:
            <ColorPIcker color={color} onChange={changeColor} />
          </div>

          <button disabled={!text.length > 0} onClick={onCreateNote}>
            Close
          </button>
        </div>
      </CreateNoteContainer>

      <NotesContainer role="noteContainer">
        <React.Suspense fallback={<div>...loading</div>}>
          {publishNote.length > 0 ? (
            publishNote.map((note) => (
              <div key={note.id}>
                <Notes note={note} />
              </div>
            ))
          ) : (
            <div className="advice-container">
              {noFoundMsg
                ? noFoundMsg
                : 'There are no notes; please create a new one using the create note input'}
            </div>
          )}
        </React.Suspense>
      </NotesContainer>
    </MainContainer>
  )
}

export default MainPage
