import {
  Box,
  Heading,
  Image,
  Container,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import profile from "../assets/Images/profile.jpg";
import { Button, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Parafo } from "../components";
import { BioSection, BioYear } from "../components/Bio";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { Main } from "../components/layout/Main";

export const Home = () => {
  return (
    <Main>
      <Container>
        <Box
          borderRadius="lg"
          my={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hola, soy un desarrollador Front-end de Paraguay!
        </Box>

        <Box display={{ md: "flex" }} justifyContent="center">
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src={profile}
                alt="Imagen profile"
                borderRadius="full"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Box mb={6}>
          <Heading as="h3" variant="section-title">
            Sobre mi
          </Heading>
          <Parafo>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called.
          </Parafo>
          <Box display="flex" justifyContent="center" my={6}>
            <Link href="/proyectos">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Mi portfolio
              </Button>
            </Link>
          </Box>
          <Heading as="h3" variant="section-title">
            Biografia
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Asuncion, Paraguay.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Comienzo la facultad, que estuve por cuatros años.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Trabaje en Earn&Young EY haciendo data cleaning.
          </BioSection>
          <BioSection>
            <BioYear>2020 hasta hoy</BioYear>
            Trabajando en Monchis app como front end.
          </BioSection>
        </Box>
        <Box mb={6}>
          <Heading as="h3" variant="section-title">
            Me ♥
          </Heading>
          <Parafo>Gym, Musica,Jugar futbol, tomar terere</Parafo>
        </Box>
        <Box mb={6}>
          <Heading as="h3" variant="section-title">
            Redes Sociales
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Gusdol" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Gusdol
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/gusdol" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @gusdol
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/gusdo.l" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @gusdo.l
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Main>
  );
};
