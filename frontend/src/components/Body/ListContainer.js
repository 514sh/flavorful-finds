import React from "react";
import { Stack } from "@chakra-ui/react";

const ListContainer = ({ children }) => {
  return (
    <Stack
      spacing={4}
      w={{ base: "80%", md: "40%" }}
      align={["center", "center", "flex-start", "flex-start"]}
      mt="100px" // Add top margin to push content below the header
      ml="auto" // Automatically align to the right
      mr="auto"
    >
      {children}
    </Stack>
  );
};

export default ListContainer;
