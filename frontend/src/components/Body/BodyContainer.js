import React from "react";
import { Flex } from "@chakra-ui/react";

const BodyContainer = ({ children }) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      {children}
    </Flex>
  );
};

export default BodyContainer;
