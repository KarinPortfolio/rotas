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
      <p>Repositório: https://github.com/KarinPortfolio/bruzine</p>
      <p>Site: http://bruzine.vercel.app </p>
            
      <Img src={B} alt="fantastika"/>
      <p>Repositório: https://github.com/KarinPortfolio/fantastika</p>
      <p>Site: http://karinportfolio.github.io/fantastika/</p>

      <Img src={C} alt="estilosa"/>
      <p>Repositório: https://github.com/KarinPortfolio/estilosa</p>
      <p>Site: http://estilosa.vercel.app</p>
      </MioloDiv>
      <MioloDiv>
      <Img src={D} alt="cartoon"/>
      <p>Repositório: https://github.com/KarinPortfolio/cartoon</p>
      <p>Site: http://cartoon-chi.vercel.app/</p>
            
      <Img src={E} alt="cade"/>
      <p>Repositório: https://github.com/KarinPortfolio/cade</p>
      <p>Site: http://karinportfolio.github.io/cade/</p>

      <Img src={F} alt="kristiel"/>
      <p>Repositório: https://github.com/KarinPortfolio/teste</p>
      <p>Site:  http://karinportfolio.github.io/teste/</p>
      </MioloDiv>

        </MioloSection>
    )
}
export default Projetos