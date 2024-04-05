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
   font-stretch: expanded;
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
flex-direction: row;
width: 40vw;
height: 50vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background-image: url(${background});
background-size: cover;
border-radius: 20px;

@media(min-width: 320px) and (max-width: 768px){
    width: 100vw;
    height: 20vh;
    font-size: 0.8rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  `
export const Interesses = styled.div`
flex-direction: column;
width: 40vw;
height: 50vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background-image: url(${background});
border-radius: 20px;
background-size: cover;

@media(min-width: 320px) and (max-width: 768px){    
    width: 100vw;
    height: 20vh;
    font-size: 0.8rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export  const Pin = styled.img` 
  height: 10vh;

  @media(min-width: 320px) and (max-width: 768px){
     height: 5vh;     
  }
`
//projetos
export const MioloSection = styled.section`
justify-content: center;
padding: 2rem;
height: 45vh;
display: flex;
align-items: center;

 @media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: auto;
  }
`

export const MioloDiv = styled.div`
  background-color: #d6bcd4a7;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
`
export const MioloImg = styled.img`
 flex-direction: column; 
  width: 40vw;
  height: 35vh ;
  justify-content: space-evenly;
  align-content: center;  

  @media(min-width: 320px) and (max-width: 768px){
    width: 80vw;
    height: 35vh;
    flex-direction: column;
    height: auto;
  }
`

export const H2 = styled.h2`
  font-size: 1rem;
`
export const H3 = styled.h3`
  font-size: 0.8rem;
  color: grey;
  font-style: italic;
`
