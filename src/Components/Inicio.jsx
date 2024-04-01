import React from "react"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import styled from "styled-components"

const conteudoMain = styled.main`
display: flex;
height: 78vh;   
    justify-content: center;
    align-items: center;
    background-color: purple;
`

function Inicio(){
    return(
        <conteudoMain>   
           Bem-vindo(a)!
        </conteudoMain>
    )
}
export default Inicio