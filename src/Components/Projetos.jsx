import React from "react"
import A from '../assets/A.png'
import B from '../assets/B.png'
import C from '../assets/C.png'
import D from '../assets/D.png'
import E from '../assets/E.png'
import F from '../assets/F.png'
import styled from "styled-components"

const MioloSection = styled.section`
  display: flex;
  height: 80vh;
  justify-content: space-evenly;
  align-items: center;
`
const MioloDiv = styled.div`
  width: 300vw;  
`

const Img = styled.img` 
  height: 20vh;
  padding: 0.8rem;
`

function Projetos(){
    return(
        <MioloSection>   
          <MioloDiv>
      <Img src={A} alt="bruzine"/>
      <p>Repositório: <a href="https://github.com/KarinPortfolio/bruzine" target="_blank">A</a></p>
      <p>Site: <a href="http://bruzine.vercel.app" target="_blank">A</a> </p>
            
      <Img src={B} alt="fantastika"/>
      <p>Repositório: <a href="https://github.com/KarinPortfolio/fantastika" target="_blank">A</a></p>
      <p>Site: <a href="http://karinportfolio.github.io/fantastika/" target="_blank">A</a></p>

      <Img src={C} alt="estilosa"/>
      <p>Repositório: <a href="https://github.com/KarinPortfolio/estilosa" target="_blank">A</a></p>
      <p>Site: <a href="http://estilosa.vercel.app" target="_blank">A</a></p>
      </MioloDiv>
      <MioloDiv>
      <Img src={D} alt="cartoon"/>
      <p>Repositório: <a href="https://github.com/KarinPortfolio/cartoon" target="_blank">A</a></p>
      <p>Site: <a href="http://cartoon-chi.vercel.app/" target="_blank">A</a></p>
            
      <Img src={E} alt="cade"/>
      <p>Repositório: <a href="https://github.com/KarinPortfolio/cade" target="_blank">A</a></p>
      <p>Site: <a href="http://karinportfolio.github.io/cade/" target="_blank">A</a></p>

      <Img src={F} alt="kristiel"/>
      <p>Repositório: <a href="https://github.com/KarinPortfolio/teste" target="_blank">A</a></p>
      <p>Site:  <a href="http://karinportfolio.github.io/teste/" target="_blank">A</a></p>
      </MioloDiv>

        </MioloSection>
    )
}
export default Projetos