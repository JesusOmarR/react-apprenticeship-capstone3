import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px;
  z-index: 1000;
  border-radius: 7px;
  margin: 0 auto;1
  width: auto;
  

   @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const ModalConatiner = styled.div`
  postion: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-indez: 1000;
`

export const Overlay = styled.div`
  postion: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    border: none;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  .save-btn {
    background-color: #8fbc8f;
  }
  .close-btn {
    background-color: #b22222;
    color: white;
  }
`
