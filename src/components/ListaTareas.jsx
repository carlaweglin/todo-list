import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";


export function ListaTareas({ tareas, setTareas, tareasFiltradas, setTareasFiltradas}) {
  
    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id != id))
        localStorage.setItem('tareas', JSON.stringify(tareas.filter((tarea) => tarea.id != id)))
        let tareasFiltradasAux
        if (tareasFiltradas.filtro === true){
            tareasFiltradasAux = {filtro:true , tareas:tareasFiltradas.tareas.filter((tarea) => tarea.id != id)}
        }
        else {
            tareasFiltradasAux = {filtro:false , tareas:tareasFiltradas.tareas.filter((tarea) => tarea.id != id)}
        }
        setTareasFiltradas(tareasFiltradasAux)
    }

    const completarTarea = (id) => {
        let tarea = tareas.find(element => element.id === id)
        let index = tareas.findIndex(element => element.id === id)
        let tareasAux = [...tareas]
        tarea.check = !(tarea.check)
        tareasAux[index] = tarea
        setTareas (tareasAux)
        localStorage.setItem('tareas', JSON.stringify(tareasAux))
    }



  const listaItems = (tareasFiltradas.tareas.length === 0 && tareasFiltradas.filtro === false)
?
tareas.map((tarea) => (
    <Flex backgroundColor='white' key={tarea.id} w={[300, 400, 600]} alignItems="center" gap="2" p='10px' boxShadow='-5px 1px 37px -3px rgba(0,0,0,0.52)' my='15px'>
      <Box p="3">
        <Heading as={tarea.check ? 's' : '' } color='black' size="md">{tarea.descripcion}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button bgGradient='linear(to-l, teal.500, green.200)'  height='40px' width='50px' onClick={() => completarTarea(tarea.id)}><i className="fa-solid fa-check"></i></Button>
        <Button bgGradient='linear(to-l, orange.500, red.200)' height='40px' width='50px' onClick={() => eliminarTarea(tarea.id)}><i className="fa-solid fa-trash"></i></Button>
      </ButtonGroup>
    </Flex>
  ))
:
tareasFiltradas.tareas.map((tarea) => (
    <Flex backgroundColor='white' key={tarea.id} w={[300, 400, 600]} alignItems="center" gap="2" p='10px' boxShadow='-5px 1px 37px -3px rgba(0,0,0,0.52)' my='15px'>
      <Box p="2">
        <Heading as={tarea.check ? 's' : '' } color='black' size="md">{tarea.descripcion}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button bgGradient='linear(to-l, teal.500, green.500)'  height='40px' width='50px' onClick={() => completarTarea(tarea.id)}><i className="fa-solid fa-check"></i></Button>
        <Button bgGradient='linear(to-l, orange.500, red.500)' height='40px' width='50px' onClick={() => eliminarTarea(tarea.id)}><i className="fa-solid fa-trash"></i></Button>
      </ButtonGroup>
    </Flex>
  ));

  return <Container maxWidth='max-content' mt='50px'>{listaItems}</Container>;
}
