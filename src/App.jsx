import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { Container, Heading } from '@chakra-ui/react'
import { AgregarTarea } from './components/AgregarTarea'

function App() {
  

  return (
    <div className="App">
      <Container bg='lightBlue'  maxW='100%' minHeight="100vh" pt="100px" py='50px' >
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
