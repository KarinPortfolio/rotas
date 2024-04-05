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
            <p>Trabalho como suporte de infraestrutura, sou mãe de um garotinho sapeca e jardineira nas horas vagas.</p>
            <p>Em 2023, iniciei minha jornada de aprendizado como Desenvolvedora Front-end no Vai na Web.</p> 
            <p>Este portfólio foi elaborado com o que aprendi sobre Html, CSS, Javascript (lógica e biblioteca React).</p> 
            <p>Aqui reuno alguns dos trabalhos que desenvolvi ao longo do curso.</p>
            <p>Estou muito animada com o que aprendi até agora e continuo buscando aprimorar minhas habilidades para construir soluções cada vez melhores. 🚀</p>
            <p>Sou imensamente grata à Vai na Web por ter me proporcionado esta incrível oportunidade de aprendizado</p>
  </S.Apresentacao>
            <S.Img src={peq} alt="mae"/>

           
        </S.ConteudoMain>
    )
}
export default Inicio