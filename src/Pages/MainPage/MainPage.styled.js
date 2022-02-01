import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  width: 90vw;
  height: auto;
  width: 90%;
  margin: 0 auto;
  align-items: center;

  .advice-container {
    display: flex;
    width: 90vw;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    justify-text: center;
  }
`
export const CreateNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);

  .options-create {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  button {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    height: fit-content;
    padding: 0.5rem 1rem;

    :hover {
      background-color: #87cefa;
      color: white;
    }
  }

  input {
    margin: 0;
    padding: 0.5rem;
    width: 20rem;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.2);
    :focus {
      outline: none;
      border: none;
      backgroun-color: red;
    }
  }
`
