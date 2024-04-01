import React from "react"
import A from '../assets/A.png'
import B from '../assets/B.png'
import C from '../assets/C.png'
import styled from "styled-components"

const mioloDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Img = styled.img` 
  height: 20vh;
  padding: 0.5rem;
`

function Projetos(){
    return(
        <mioloDiv>           
      <Img src={A} alt="bruzine"/>
      <p>Repositório:</p>
      <p>Site:</p>
            
      <Img src={B} alt="fantastika"/>
      <p>Repositório:</p>
      <p>Site:</p>

      <Img src={C} alt="estilosa"/>
      <p>Repositório:</p>
      <p>Site:</p>
        </mioloDiv>
    )
}
export default Projetos