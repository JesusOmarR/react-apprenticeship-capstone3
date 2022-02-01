import React from 'react'
import { NotFoundContainer } from './NoteFound.styled'

const NotFound = () => {
  return (
    <NotFoundContainer>
      Looks like you are lost space cowboy, what about <a href="/"> go back </a>{' '}
      and see whats going on
      <h1>404</h1>
    </NotFoundContainer>
  )
}

export default NotFound
