import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Divider
} from "@chakra-ui/react";
import React from "react";
const RecipeCard = ({ recipe, index, handleOpenRecipeModal }) => {
  return (
    <Card maxW="xxl" variant="elevated" align="center" size="sm">
      <CardBody align="center">
        <Image
          // src={"foodImages/" + recipe.filename + ".jpg"}
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={recipe.title}
          borderRadius="lg"
          size="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.title}</Heading>
          <Text></Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            onClick={() => handleOpenRecipeModal(index)}
            variant="solid"
            colorScheme="blue"
          >
            See More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
