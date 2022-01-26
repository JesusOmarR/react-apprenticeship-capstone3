import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import Private from '../Private.component'
import Login from '../../../Pages/Login'
import MainPage from '../../../Pages/MainPage'
import { AuthContext } from '../../../Providers/User/User.provider'

it('redirects unauthenticated users to SignIn', async () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })

  render(
    <Router history={history}>
      <Switch>
        <AuthContext.Provider value={{ authenticated: false }}>
          <Private exact path="/">
            <MainPage />
          </Private>
          <Route exact path="/login" component={Login} />
        </AuthContext.Provider>
      </Switch>
    </Router>
  )

  expect(history.location.pathname).toBe('/login')
})
