import React from "react"
import styled from "styled-components"

const SobreMim = styled.div`
  width: 100%;
  height: 80vh;
  padding: 5px;
  justify-content: end;
  box-sizing: border-box;
  `

function Sobre(){
    return(
        <SobreMim>
            <p>Olá, tudo bem?</p> 
            <p>Meu nome é Karin, moro em Taubaté-SP.</p>
            <p>Iniciei minha jornada Front-end no Vai na web e reuno neste portfólio alguns trabalhos desenvolvidos ao longo do curso.</p>
            <p>No primeiro módulo aprendi sobre HTML e CSS</p>
            <p>No segundo módulo, aprendi sobre JavaScript e a biblioteca React</p>
            <p>Paralelamente tenho estudado outras coisas</p>
            
        </SobreMim>
        

    )
}
export default Sobre