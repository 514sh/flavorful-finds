//dependencies
import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);
