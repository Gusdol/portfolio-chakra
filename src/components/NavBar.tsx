import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  Link,
  useColorModeValue,
  Flex,
  Text,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "@reach/router";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { IoLogoGithub } from "react-icons/io5";
import { ThemeToggleButton } from "./themeToggleButton";
import { HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  href?: string;
  path?: string;
  target?: string;
  children?: ReactNode;
  props?: StyleFunctionProps;
}
const LinkItem = ({ href, path, target, children, ...props }: Props) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Link
      to={href}
      as={ReactRouterLink}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

export const NavBar = (props: Props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Text
              fontWeight="bold"
              ml={2}
              fontSize="xl"
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
            >
              Gustavo Doldan
            </Text>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/proyectos" path={path}>
            Proyectos
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/craftzdog/craftzdog-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box display="flex" flex={1} justifyContent="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link href="/proyectos">
                  <MenuItem as={Link}>Proyectos</MenuItem>
                </Link>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
