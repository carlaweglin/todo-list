import { useState } from 'react';
import { Text, Input, Box, Select, Flex, Spacer, Button } from "@chakra-ui/react";

export function AgregarTarea() {

    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState('');
    
    function handleChange(e) {
         setTarea(e.target.value)
      }

      function agregarTarea() {
        let aux = tareas
        let tarea = {
            nombreTarea : tarea,
            
        }
        aux.push(tarea)
        setTareas(aux)
        setTarea('')
     }

  return (
    <>
      <Flex m="100px 100px 50px 100px">
        <Box w="45%">
          <Input
            p="20px"
            bg="white"
            placeholder="Ingrese una tarea"
            size="sm"
            value={tarea}
            onChange={handleChange}
          />
        </Box>
        <Spacer />
        <Box w="45%">
          <Select bg="white" placeholder="Seleccionar">
            <option value="todas">Todas</option>
            <option value="completas">Completas</option>
            <option value="incompletas">Incompletas</option>
          </Select>
        </Box>
      </Flex>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="blue.500"
        onClick={agregarTarea}
      >
        Agregar
      </Button>
      
    </>
  );
}
