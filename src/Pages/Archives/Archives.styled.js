import styled from 'styled-components'

export const ArchivesContainer = styled.div`
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
