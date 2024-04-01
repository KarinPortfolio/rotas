import React from "react"
import styled from "styled-components"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dca4e7;
`

const Ul = styled.ul`
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
`
const Li = styled.li`
color: yellow;
text-decoration:none; 
`

function Navegacao(){
    return(
        <BrowserRouter>
        <Nav>
        <Ul>
            <Li><Link to="/">Inicio</Link></Li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
        </Ul>
        </Nav>
        <Routes>
        
        <Route path="/" element={<Inicio/>}/>
        <Route path="Sobre" element={<Sobre/>}/>
        <Route path="Projetos" element={<Projetos/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default Navegacao