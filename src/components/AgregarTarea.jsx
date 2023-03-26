import { Text, Input, Box, Select, Flex, Spacer, Button } from "@chakra-ui/react";

export function AgregarTarea() {
  return (
    <>
      <Flex m="100px 100px 50px 100px">
        <Box w="45%">
          <Input
            p="20px"
            bg="white"
            placeholder="Ingrese una tarea"
            size="sm"
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
      >
        Agregar
      </Button>
    </>
  );
}
