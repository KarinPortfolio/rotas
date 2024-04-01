import React from "react"
import styled from "styled-components"
import Git from '../assets/github.png'
import Lin from '../assets/linkedin.png'
import Ins from '../assets/instagram.png'
import * as S from "./Style.jsx"

function Sobre(){
    return(
        <S.SobreMim>            
          
            <S.MinhasRedes> 
            <h2>Mnhas Redes:</h2>  

            <p><a href="https://github.com/karinportfolio" target="_blank"> <S.Pin src={Git} alt="github"/></a></p>       
            <p><a href="https://www.linkedin.com/in/karinabe/" target="_blank"><S.Pin src={Lin} alt="linkedin"/></a></p>
            <p><a href="https://www.instagram.com/megadistante/" target="_blank"><S.Pin src={Ins} alt="instagram"/></a></p>
            </S.MinhasRedes>   

            <S.Interesses>
            <h2>Interesses:</h2>            
            
                    <S.Topico>- Desenvolvimento front-end (HTML, CSS, Javascript)</S.Topico> 
                    <S.Topico>- Ler (culinária, jardinagem, autoconhecimento, programação)</S.Topico> 
                    <S.Topico>- Artesanato (costurar, tricotar, crochetar, desenhar, robótica)</S.Topico> 
            </S.Interesses> 
        
            </S.SobreMim>        

    )
}
export default Sobre