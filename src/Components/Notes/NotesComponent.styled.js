import styled from 'styled-components'

export const NotesDiv = styled.div`
  width: 80%;
  /* Control de la altura con base en el texto del div*/
  height: fit-content;
  word-wrap: break-word;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  margin: 1rem 0.2rem;
  padding: 0.5rem 1rem;
  border: 0.5px solid rgba(0, 0, 0.2, 0.2);

  .options-container {
    height: 2rem;
  }

  .options {
    display: none;
  }

  :hover {
    .options {
      display: flex;
    }
  }

  img {
    width: 1.2rem;
    padding: 0.5rem;

    :hover {
      background-color: #d3d3d3;

      border-radius: 14px;
    }
  }
`

export const ColorSelect = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
`
