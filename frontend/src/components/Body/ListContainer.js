import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

const ListContainer = ({ children }) => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {children}
    </SimpleGrid>
  );
};

export default ListContainer;
