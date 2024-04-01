import React from "react"
import styled from "styled-components"
import peq from '../assets/tumb.jpg'

const ConteudoMain = styled.main`
    display: flex;
    width: 100vw;
    height: 80vh;   
    justify-content: center;
    align-items: center;
`
const Img = styled.img` 
  height: 50vh;
`
function Inicio(){
    return(
        <ConteudoMain>   
           Seja bem-vindo(a) ao site!
           <Img src={peq} alt="mae"/>
        </ConteudoMain>
    )
}
export default Inicio