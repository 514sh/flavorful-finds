import LoginForm from "./LoginForm";
import React from "react";

import {
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";

const Login = ({
  ...props
}) => {
  const title = "Flavorful Finds: Your Recipe Discovery App"
  const subtitle = "Exploring Culinary Delights One Recipe at a Time"
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <LoginForm {...props} />
      </Box>
    </Flex>
  );
}

export default Login;