import { Container, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import { WorkGridItem } from "../components/GridItem";
import { Main } from "../components/layout/Main";

import cotizaCripto1 from "../assets/Images/cotizacripto.png";

export const Proyectos = () => {
  return (
    <Main>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Proyetos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Box mb={6}>
            <WorkGridItem
              id="cripto"
              title="Cotizador criptomonedas"
              thumbnail={cotizaCripto1}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Box>
          <Box mb={6}>
            <WorkGridItem
              id="cripto"
              title="Cotizador criptomonedas"
              thumbnail={cotizaCripto1}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Box>
          <Box mb={6}>
            <WorkGridItem
              id="cripto"
              title="Cotizador criptomonedas"
              thumbnail={cotizaCripto1}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Box>
          <Box mb={6}>
            <WorkGridItem
              id="cripto"
              title="Cotizador criptomonedas"
              thumbnail={cotizaCripto1}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Box>
        </SimpleGrid>
      </Container>
    </Main>
  );
};
