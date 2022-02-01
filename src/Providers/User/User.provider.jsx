import React, { useState, useEffect, useContext, useCallback } from 'react'
import { storage } from '../../Utils/storage'

export const AuthContext = React.createContext(null)
import { auth } from '../../base'
import { signOut } from 'firebase/auth'
function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`)
  }
  return context
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(
    Boolean(storage.get('isAuth'))
  )
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const lastAuthState = storage.get('isAuth')
    const user = storage.get('currentUser')
    const isAuthenticated = Boolean(lastAuthState)
    setCurrentUser(user)
    setAuthenticated(isAuthenticated)
  }, [])

  const login = useCallback((user) => {
    setCurrentUser(user)
    setAuthenticated(true)
    storage.set('isAuth', true)
    storage.set('currentUser', user)
  }, [])

  const logout = useCallback(async () => {
    await signOut(auth)
    setAuthenticated(false)
    setCurrentUser(null)
    storage.set('isAuth', false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authenticated,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth }
export default AuthProvider
