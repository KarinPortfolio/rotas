import React from "react"
import styled from "styled-components"
import Git from '../assets/github.png'
import Lin from '../assets/linkedin.png'

const SobreMim = styled.section`
  height: 80vh;
  padding: 10px;
  justify-content: end;
  box-sizing: border-box;
  `
  const MinhasRedes = styled.div`
  display: flex;
  justify-content: space-around;
    width: 100vw;
  `
  const Img = styled.img` 
  height: 10vh;
`

function Sobre(){
    return(
        <SobreMim>
            <p>Olá, tudo bem?</p> 
            <p>Meu nome é Karin, moro em Taubaté-SP.</p>
            <p>Em 2023, dei início à minha jornada como **desenvolvedora Front-end** no Vai na Web.</p> 
            <p>Neste portfólio, apresento alguns dos trabalhos que desenvolvi ao longo do curso.</p>
<p>No primeiro módulo, aprendi HTML e CSS, aprendendi a criar estruturas de páginas e estilizá-las para uma experiência visual agradável.</p>
<p>No segundo módulo, aprendi JavaScript e explorei a biblioteca React. Com essas ferramentas, pude criar interatividade, dinamismo e componentes reutilizáveis para minhas aplicações web.</p>
<p>Além disso, tenho me dedicado a estudar outros temas relevantes para o desenvolvimento de software, como: banco de dados, cloud computing, java e soft-skils.</p>
<p>Estou muito animada com o que aprendi até agora e continuo buscando aprimorar minhas habilidades para construir soluções cada vez mais robustas e eficientes. 🚀</p>
            <h2>Mnhas Redes:</h2>

            <MinhasRedes>            
            <Img src={Git} alt="github"/> https://github.com/karinportfolio
            <Img src={Lin} alt="linkedin"/> https://www.linkedin.com/in/karinabe/       
            </MinhasRedes>   
        </SobreMim>
        

    )
}
export default Sobre