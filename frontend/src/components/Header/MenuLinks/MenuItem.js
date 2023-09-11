import React from "react";
import { Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const MenuItem = ({ children, isLast, to = "/", setLocation, ...rest }) => {

  return (
    <ChakraLink as={Link} to={to} onClick={() => setLocation(to)}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </ChakraLink>
  );
};

export default MenuItem