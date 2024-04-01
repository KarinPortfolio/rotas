import styled from "styled-components"
import background from "../assets/fundo.jpg"
//inicio
export const ConteudoMain = styled.main`
    display: flex;  
    width: 100vw;
    height: 80vh;   
    justify-content: center;
    flex-direction: row;
    align-items: center;

    @media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: auto;
  }
`

export const Apresentacao = styled.div`
   width: 60vw;     
`

export const Img = styled.img` 
  height: 50vh;
`
// navegação
export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dca4e7;
`

export const Ul = styled.ul`
  cursor: pointer;
  color: #888888;
  font-size: 1.2rem;
  list-style: none;
  text-shadow: 2px 1px 2px grey;
  width: 42vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;  
  a{
  text-decoration: none;
  }
  @media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 20vh;
    font-size: 0.4 rem;
    a{
        font-size: 0.4 rem;
    }
}
`
//sobre
export const SobreMim = styled.section`
    display: flex;
    justify-content: space-evenly;
    height: 80vh;  
    padding-top: 6rem;

    @media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: auto;
    padding-top: 0;
  }
`
 
export const MinhasRedes = styled.div`
width: 40vw;
height: 50vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
background-image: url(${background});
background-size: cover;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    width: auto;
    flex-direction: column;
    height: auto;
  }
  `
export const Topico = styled.p`
  padding-top: 0.1px;
`
export const Interesses = styled.div`
width: 40vw;
height: 50vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-image: url(${background});
background-size: cover;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    width: auto;
    padding: 2rem;
    flex-direction: column;
    height: auto;
  }
`
export  const Pin = styled.img` 
  height: 10vh;
`
//projetos
export const MioloSection = styled.section`
padding: 2rem;
height: 80vh;
display: flex;
align-items: center;

 @media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: auto;
  }

  
`
export const MioloDiv = styled.div`
 flex-direction: column; 
  width: 80vw;  
  justify-content: space-evenly;
  align-content: center;
  
`

export const Port = styled.img` 
  height: 20vh;
  padding: 0.8rem;
`