import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};

const customTheme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px"
      },
      variants: {
        'secondary': {
          color: "primary.700",
          bg: "white",
          _hover: { bg: "primary.500", color: "white" }
        },
        'main':{
          borderRadius:"8px" ,
          color:"white",
          bg:"primary.500",
          _hover:{ bg: "primary.700"}
        }
      }
    }
  }
});

export default customTheme;