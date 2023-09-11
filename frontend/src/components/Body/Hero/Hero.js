import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Hero = ({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ctaRegisterText,
  ctaRegisterLink,
  handleOpenRegister,
  ...rest
}) => (
  <Flex
    align="center"
    justify={{ base: "center", md: "space-around", xl: "space-between" }}
    direction={{ base: "column-reverse", md: "row" }}
    wrap="no-wrap"
    minH="70vh"
    px={8}
    mb={16}
    {...rest}
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
      <Link to={ctaLink}>
        <Button
          colorScheme="primary"
          borderRadius="8px"
          py="4"
          px="4"
          lineHeight="1"
          size="md"
        >
          {ctaText}
        </Button>
      </Link>
      <Link to={ctaRegisterLink} style={{ textDecoration: 'none' }} onClick={handleOpenRegister} >
      <Text
        fontSize="xs"
        mt={2}
        textAlign="center"
        color="primary.800"
        opacity="0.6"
      >
        {ctaRegisterText}
      </Text>
      </Link>
    </Stack>
    <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
      <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
    </Box>
  </Flex>
);

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaRegisterLink: PropTypes.string,
  ctaRegisterText: PropTypes.string,
};

Hero.defaultProps = {
  title: "Flavorful Finds: Your Recipe Discovery App",
  subtitle:
    "Exploring Culinary Delights One Recipe at a Time",
  image: "images/landingImage.png",
  ctaText: "Find your recipe now",
  ctaLink: "/home",
  ctaRegisterLink: "/login",
  ctaRegisterText: "Register now to save your favorite recipes and embark on a culinary journey."
};

export default Hero;