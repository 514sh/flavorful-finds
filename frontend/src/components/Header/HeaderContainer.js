import React from "react";
import { Flex } from "@chakra-ui/react";

const HeaderContainer = ({ children }) => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {children}
    </Flex>
  );
};

export default HeaderContainer;
