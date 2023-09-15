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
          src={FOOD_IMAGES_URL + recipe.filename + ".jpg"}
          fallbackSrc="images/logo.png"
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
            variant = 'main'
            onClick={() => handleOpenRecipeModal(index)}
          >
            See More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
