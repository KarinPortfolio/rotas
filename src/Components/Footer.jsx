import React from 'react'
import styled from "styled-components"

const Foot = styled.footer`
  background-color: #dca4e7;
  width: 100%;
  padding: 5px;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  `
function Footer() {
  return (
    <Foot>Desenvolvido para fins didáticos © 2024</Foot>      
  )
}

export default Footer