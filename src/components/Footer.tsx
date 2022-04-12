import { Box, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Gustavo Doldan. Todos los derechos reservados.
      </Box>
    </Container>
  );
};
