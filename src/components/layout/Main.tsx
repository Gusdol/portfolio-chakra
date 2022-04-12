import { Box, Container } from "@chakra-ui/react";
import { NavBar, Footer } from "../index";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const Main = ({ children }: Props) => {
  return (
    <Box as="main" pb={8}>
      <NavBar />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};
