import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";


export function ListaTareas({ tareas }) {
  console.log(tareas);

  const listaItems = tareas.map((tarea) => (
    <Flex backgroundColor='white' key={tarea.id} width="600px" alignItems="center" gap="2" p='10px' boxShadow='-5px 1px 37px -3px rgba(0,0,0,0.52)' my='15px'>
      <Box p="2">
        <Heading color='black' size="md">{tarea.descripcion}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button bgGradient='linear(to-l, teal.500, green.500)'  height='40px' width='50px'><i class="fa-solid fa-check"></i></Button>
        <Button bgGradient='linear(to-l, orange.500, red.500)' height='40px' width='50px'><i class="fa-solid fa-trash"></i></Button>
      </ButtonGroup>
    </Flex>
  ));

  return <Container maxWidth='max-content' mt='50px'>{listaItems}</Container>;
}
