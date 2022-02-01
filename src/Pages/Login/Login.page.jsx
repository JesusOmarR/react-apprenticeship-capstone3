import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { LoginContainer, LoginForm } from './LoginPage.styled'
import { useAuth } from '../../Providers/User/User.provider'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../base'

function Login() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  })
  const [loginError, setLoginError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { authenticated, login } = useAuth()
  const { userName, password } = user
  const history = useHistory()

  useEffect(() => {
    if (authenticated) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [authenticated])

  const authenticate = async (event) => {
    event.preventDefault()

    setLoading(true)
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        userName,
        password
      )
      login(user.email)
    } catch (error) {
      setLoginError(true)
      setTimeout(() => {
        setLoginError(false)
      }, 2000)
    }
    setLoading(false)
  }

  const onChangeInput = (event) => {
    console.log(event.target.name)
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <LoginContainer>
      <h1>Welcome back!</h1>
      {loginError && 'invalid credentials'}
      <LoginForm>
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              value={user.userName}
              required
              name="userName"
              type="text"
              id="username"
              onChange={onChangeInput}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              value={user.password}
              required
              name="password"
              type="password"
              id="password"
              onChange={onChangeInput}
            />
          </label>
        </div>
        <button disabled={loading} onClick={authenticate} type="submit">
          {loading ? 'Loading...' : 'login'}
        </button>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
