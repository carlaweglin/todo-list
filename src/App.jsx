import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import { Container, Heading } from "@chakra-ui/react";
import { AgregarTarea } from "./components/AgregarTarea";

function App() {
  return (
    <div className="App">
      <Container
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        maxW="100%"
        minHeight="100vh"
        pt="100px"
        py="50px"
      >
        <header>
          <Heading as="h1" fontSize="50px" >
            TODO LIST
          </Heading>
        </header>
        <section>
          <AgregarTarea />
        </section>
      </Container>
    </div>
  );
}

export default App;
