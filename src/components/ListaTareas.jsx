import { Button, Card, CardBody, Container, Text } from "@chakra-ui/react";

export function ListaTareas({tareas}) {

    console.log(tareas);
    
  const listaItems =  
   tareas.map((tarea) => (
    <li key={tarea.id}>
          <Card>
            <CardBody>
              <Text>{tarea.descripcion}</Text>
            </CardBody>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
            >
              Ok
            </Button>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="red.500"
            >
              Eliminar
            </Button>
          </Card>
        </li>)
  )

    
  return (
    <Container>
      <ul>
        {listaItems}
      </ul>
    </Container>
  );
}
