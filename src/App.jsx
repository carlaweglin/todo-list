import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Container, Heading } from '@chakra-ui/react'

function App() {
  

  return (
    <div className="App">
      <Container bg='lightBlue'  maxW='100%' height="100vh" p="50px" >
      <Heading  fontSize='50px' >TODO LIST</Heading>
      </Container>
    </div>
  )
}

export default App
