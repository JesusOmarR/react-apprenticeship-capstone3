import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 300px;
  h1 {
    text-align: center;
    letter-spacing: -1px;
  }
  align-items: center;
  margin: auto;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group strong {
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
}

.form-group input {
  color: black;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: rgba(0 0 0 10%);
}

button[type="submit"] {
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
}

}`
