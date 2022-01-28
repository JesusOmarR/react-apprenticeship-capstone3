import React, { useState } from 'react'
import {
  NotesContainer,
  MainContainer,
  CreateNoteContainer,
} from './MainPage.styled'
import { useNotes } from '../../Providers/Notes'
import Notes from '../../Components/Notes'
import { v4 as uuid } from 'uuid'

function MainPage() {
  const { notes, addNote } = useNotes()

  const [note, setNote] = useState({
    color: 'white',
    text: null,
    archived: false,
  })

  const { text } = note

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

  return (
    <MainContainer>
      <CreateNoteContainer>
        <input
          /*   onFocus={() => {
            console.log('xd')
          }}
          onBlur={() => {
            console.log('xd')
          }} */
          placeholder="Take a note .."
          value={text}
          onChange={onChangeinput}
          name="text"
        />
        <div className="options-create">
          <label htmlFor="cars">Choose a color</label>
          <select onChange={onChangeinput} name="color" id="cars">
            <option value="#CD5C5C">red</option>
            <option value="#ADD8E6">blue</option>
            <option value="#FAFAD2">yellow</option>
            <option value="#778899">grey</option>
          </select>
          <button onClick={onCreateNote}>Create</button>
        </div>
      </CreateNoteContainer>

      <NotesContainer>
        {notes.length > 0 ? (
          notes
            .filter((n) => n.archived === false)
            .map((note) => (
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
    </MainContainer>
  )
}

export default MainPage
