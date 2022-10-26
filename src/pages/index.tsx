import { Button, Flex, Input } from "@chakra-ui/react";


export default function Home() {
  return (
  <Flex
    w="100vw"
    h="100vh"
    align="center"
    justify="center">
      
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        >
          <h1>Conservare Gráfica</h1>
          <Input
            name="email"
            type="email" 
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            
          />
          <Input
            name="password"
            type="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"


          />

          <Button type="submit" mt={6} colorScheme="pink"> Entrar</Button>

      </Flex>
    </Flex>
  )
}
