import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import LoginPage from '../Login.page'
import MainPage from '../../MainPage'
import AuthProvider from '../../../Providers/User/User.provider'
import NotesProvider from '../../../Providers/Notes/Notes.provider'
import { createMemoryHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'

describe('Testing LoginPage', () => {
  it('Renders the login Page', () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    )
  })

  it('Display the inputs for user and password', () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    )

    screen.getByLabelText('username')
    screen.getByLabelText('password')
  })

  it('Redirects when a user is logged in', async () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] })
    render(
      <Router history={history}>
        <Switch>
          <AuthProvider>
            <NotesProvider>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/" component={MainPage} />
            </NotesProvider>
          </AuthProvider>
        </Switch>
      </Router>
    )
    const userNameInput = screen.getByLabelText('username')
    const passWordInput = screen.getByLabelText('password')
    const sumbitButton = screen.getByRole('button')

    fireEvent.change(userNameInput, { target: { value: 'prueba@prueba.com' } })
    fireEvent.change(passWordInput, { target: { value: '12345678' } })
    fireEvent.click(sumbitButton)

    await waitFor(() => expect(history.location.pathname).toBe('/'))
  })

  it('Show error messages when credentials are incorrect', async () => {
    localStorage.setItem('isAuth', JSON.stringify(false))
    const history = createMemoryHistory({ initialEntries: ['/login'] })
    render(
      <Router history={history}>
        <Switch>
          <AuthProvider>
            <Route exact path="/login" component={LoginPage} />
          </AuthProvider>
        </Switch>
      </Router>
    )
    const userNameInput = screen.getByLabelText('username')
    const passWordInput = screen.getByLabelText('password')
    const sumbitButton = screen.getByRole('button')

    fireEvent.change(userNameInput, { target: { value: 'prueba@prueba.com' } })
    fireEvent.change(passWordInput, { target: { value: 'wrongpassword' } })
    fireEvent.click(sumbitButton)

    await waitFor(() => screen.getByText('invalid credentials'))
  })
})
