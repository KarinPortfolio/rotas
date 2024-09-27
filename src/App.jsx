import { useState } from 'react'
import Navegacao from "./Components/Navegacao"
import {createGlobalStyle} from "styled-components"
import Footer from './Components/Footer'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;
  }
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>   
      <Navegacao />
      <Footer />
       
    </>
  )
}

export default App
