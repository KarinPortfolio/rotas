import React from "react"
import A from '../assets/A.png'
import B from '../assets/B.png'
import C from '../assets/C.png'
import D from '../assets/D.png'
import E from '../assets/E.png'
import F from '../assets/F.png'
import * as S from "./Style.jsx"

function Projetos(){
    return(
        <S.MioloSection>   
          <S.MioloDiv>
             <S.Port src={A} alt="bruzine"/>
            <p>Repositório: <a href="https://github.com/KarinPortfolio/bruzine" target="_blank">https://github.com/KarinPortfolio/bruzine</a></p>
            <p>Site: <a href="http://bruzine.vercel.app" target="_blank">http://bruzine.vercel.app</a> </p>
            
            <S.Port src={B} alt="fantastika"/>
            <p>Repositório: <a href="https://github.com/KarinPortfolio/fantastika" target="_blank">https://github.com/KarinPortfolio/fantastika</a></p>
            <p>Site: <a href="http://karinportfolio.github.io/fantastika/" target="_blank">http://karinportfolio.github.io/fantastika/</a></p>

            <S.Port src={C} alt="estilosa"/>
            <p>Repositório: <a href="https://github.com/KarinPortfolio/estilosa" target="_blank">https://github.com/KarinPortfolio/estilosa</a></p>
            <p>Site: <a href="http://estilosa.vercel.app" target="_blank">http://estilosa.vercel.app</a></p>
          </S.MioloDiv>

          <S.MioloDiv>
            <S.Port src={D} alt="cartoon"/>
            <p>Repositório: <a href="https://github.com/KarinPortfolio/cartoon" target="_blank">https://github.com/KarinPortfolio/cartoon</a></p>
            <p>Site: <a href="http://cartoon-chi.vercel.app/" target="_blank">http://cartoon-chi.vercel.app/</a></p>
      
            <S.Port src={E} alt="cade"/>
            <p>Repositório: <a href="https://github.com/KarinPortfolio/cade" target="_blank">https://github.com/KarinPortfolio/cade</a></p>
            <p>Site: <a href="http://karinportfolio.github.io/cade/" target="_blank">http://karinportfolio.github.io/cade/</a></p>

            <S.Port src={F} alt="kristiel"/>
            <p>Repositório: <a href="https://github.com/KarinPortfolio/teste" target="_blank">https://github.com/KarinPortfolio/teste</a></p>
            <p>Site:  <a href="http://karinportfolio.github.io/teste/" target="_blank">http://karinportfolio.github.io/teste/</a></p>
          </S.MioloDiv>  

        </S.MioloSection>
    )
}
export default Projetos