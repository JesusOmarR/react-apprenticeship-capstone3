import MainPage from '../MainPage'
import NotesProvider from '../../../Providers/Notes/Notes.provider'
import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'

describe('Testing Notes Page', () => {
  afterEach(() => {
    localStorage.clear()
  })
  it('Renders the Notes Page', () => {
    render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    )
  })

  it('Shows a message that there are no notes', () => {
    render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    )
    screen.getByText(
      'There are no notes; please create a new one using the create note input'
    )
  })

  it('Craetes a newNote', async () => {
    render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    )

    const noteTextInput = screen.getByRole('textbox')
    const createNoteBtn = screen.getByRole('button')

    fireEvent.change(noteTextInput, {
      target: { value: 'nota de prueba' },
    })
    fireEvent.click(createNoteBtn)
    await waitFor(() => screen.getByText('nota de prueba'))
  })
})

describe('Archive and editing Notes', () => {
  it('Archives a note', async () => {
    localStorage.setItem(
      'Notes',
      JSON.stringify([
        {
          archived: false,
          color: 'white',
          id: '1ca878a7-b0de-49b6-a466-e6dcba37e84f',
          text: 'prueba',
        },
      ])
    )
    render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    )
    const NoteContainer = screen.getByRole('noteContainer')
    fireEvent.mouseOver(NoteContainer)
    const archiveButton = screen.getByAltText('archive')

    await waitFor(() => fireEvent.click(archiveButton))
    screen.getByText(
      'There are no notes; please create a new one using the create note input'
    )
  })

  it('edit a note', async () => {
    localStorage.setItem(
      'Notes',
      JSON.stringify([
        {
          archived: false,
          color: 'white',
          id: '1ca878a7-b0de-49b6-a466-e6dcba37e84f',
          text: 'prueba',
        },
      ])
    )
    render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    )
    const NoteContainer = screen.getByRole('noteContainer')
    fireEvent.mouseOver(NoteContainer)
    const editButton = screen.getByAltText('edit')
    await waitFor(() => fireEvent.click(editButton))
    const textNote = screen.getByRole('text-area')
    const saveButton = screen.getByRole('save')

    fireEvent.change(textNote, {
      target: { value: 'modificado' },
    })
    await waitFor(() => fireEvent.click(saveButton))
    screen.getByText('modificado')

    screen.debug()
  })
})
