import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { Container, Heading } from '@chakra-ui/react'
import { AgregarTarea } from './components/AgregarTarea'

function App() {
  

  return (
    <div className="App">
      <Container bg='lightBlue'  maxW='100%' height="100vh" pt="100px" >
      <header>
      <Heading as="h1" fontSize='50px' >TODO LIST</Heading>
      </header>
      <section>
      <AgregarTarea/>
      </section>
      </Container>
    </div>
  )
}

export default App
