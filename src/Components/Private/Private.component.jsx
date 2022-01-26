import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../Providers/User/User.provider'

// eslint-disable-next-line react/prop-types
function Private({ children, ...rest }) {
  const { authenticated } = useAuth()
  return (
    <Route
      {...rest}
      render={() => (authenticated ? children : <Redirect to="/login" />)}
    />
  )
}

export default Private
