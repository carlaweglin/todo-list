import { useState } from "react";
import {
  Text,
  Input,
  Box,
  Select,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { ListaTareas } from "./ListaTareas";

export function AgregarTarea() {
  const [tareas, setTareas] = useState([]);
//   const [tareasFiltradas, setTareasFiltradas] = useState (tareas)
  const [tarea, setTarea] = useState("");

  function handleChange(e) {
    setTarea(e.target.value);
  }

  function agregarTarea() {
    let aux = tareas;
    let tareaIngresada = {
      descripcion: tarea,
      id: self.crypto.randomUUID(),
      check: false,
    };
    aux.push(tareaIngresada);
    setTareas(aux);
    setTarea("");
  }


  return (
    <>
      <Flex m="100px 100px 50px 100px">
        <Box w="45%" boxShadow="-5px 1px 37px -3px rgba(0,0,0,0.52)">
          <Text as="h2" fontSize="xl">
            Tarea
          </Text>
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
        <Box w="45%" boxShadow="-5px 1px 37px -3px rgba(0,0,0,0.52)">
          <Text as="h2" fontSize="xl">
            Filtros
          </Text>
          <Select bg="white" placeholder="Seleccionar" onChange={(e)=>filtrarTareas(e)}>
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
      <ListaTareas tareas={tareas} setTareas={setTareas}/>
    </>
  );
}
