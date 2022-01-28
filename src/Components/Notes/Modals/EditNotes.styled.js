import styled from 'styled-components'

export const ModalConatiner = styled.div`
  postion: fixed;
  top: 50%;
  left: 50%;
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
`
