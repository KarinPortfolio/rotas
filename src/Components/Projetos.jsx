import React from "react"
import A from '../assets/A.png'
import B from '../assets/B.png'
import C from '../assets/C.png'
import D from '../assets/D.png'
import E from '../assets/E.png'
import F from '../assets/F.png'
import * as S from "./Style.jsx"
function Projetos(){
  const desafios = [
    {imagem: D, titulo: "Cartoon", link: "https://github.com/KarinPortfolio/cartoon" , descricao: "react, map, styled-components, useState, useEffect, filter"},
    {imagem: C, titulo: "Estilosa", link: "https://github.com/KarinPortfolio/estilosa", descricao: "react, styled-components,"},
    {imagem: A, titulo: "Bruzine", link: "https://github.com/KarinPortfolio/bruzine", descricao: "react, useState"},
    {imagem: F, titulo: "Kristel", link: "https://github.com/KarinPortfolio/teste", descricao: "react, styled-components"},
    {imagem: B, titulo: "Fantastika", link: "https://github.com/KarinPortfolio/fantastika", descricao: "html, css, responsividade"},
    {imagem: E, titulo: "Cadê", link: "https://github.com/KarinPortfolio/cade", descricao: "html, css, responsividade"}
  ]

    return(
      <> 
      {desafios.map((item) => (
        <S.MioloSection>
          <S.MioloDiv>
      <a href={item.link} target="_blank"><S.MioloImg src={item.imagem} alt="{item.titulo}" /></a>
      <S.H2>{item.titulo}</S.H2>
      <S.H3>{item.descricao}</S.H3>
      </S.MioloDiv>
        </S.MioloSection>
      
    ))}
    </>
    )
  }  
export default Projetos