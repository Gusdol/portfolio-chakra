import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

interface Props {
  props?: StyleFunctionProps;
}

export const styles = {
  global: (props: Props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

export const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: Props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

export const colors = {
  grassTeal: "#88ccca",
};

export const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
