import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
       <Stack spacing="12" align="flex-start">
          <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">ATENDIMENTO</Text>
            <Stack spacing="4" mt="8" align="stretch">
              <Link display="flex">
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Pedidos</Text>
              </Link>
              <Link display="flex">
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Clientes</Text>
              </Link>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">PRODUÇÃO</Text>
            <Stack spacing="4" mt="8" align="stretch">
              <Link display="flex">
                <Icon as={RiInputMethodLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Quadro de Produção</Text>
              </Link>
              <Link display="flex">
                <Icon as={RiGitMergeLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Finalizados</Text>
              </Link>
            </Stack>
          </Box>

          <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">FINANCEIRO</Text>
            <Stack spacing="4" mt="8" align="stretch">
              <Link display="flex">
                <Icon as={RiInputMethodLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Lançamentos</Text>
              </Link>
              <Link display="flex">
                <Icon as={RiGitMergeLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Fornecedores</Text>
              </Link>
            </Stack>
          </Box>
          

        </Stack>

    </Box>
  )
}