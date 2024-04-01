import React from "react"
//import styled from "styled-components"
import peq from '../assets/tumb.jpg'
import * as S from "./Style.jsx"


function Inicio(){
    return(
        <S.ConteudoMain> 
             <S.Apresentacao>
            <p>Olá, tudo bem?</p> 
            <p>Meu nome é Karin, moro em Taubaté-SP.</p>
            <p>Em 2023, iniciei minha jornada de aprendizado como Desenvolvedora Front-end no Vai na Web.</p> 
            <p>Neste portfólio, reuno alguns dos trabalhos que desenvolvi ao longo do curso.</p>
            <p>Estou muito animada com o que aprendi até agora e continuo buscando aprimorar minhas habilidades para construir soluções cada vez mais robustas e eficientes. 🚀</p>
           
  </S.Apresentacao>
            <S.Img src={peq} alt="mae"/>

           
        </S.ConteudoMain>
    )
}
export default Inicio