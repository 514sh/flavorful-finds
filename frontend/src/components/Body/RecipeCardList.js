import RecipeCard from "./RecipeCard";
import React from "react";
import { generateUniqueKey } from "../../utils/helper";
import {
  SimpleGrid,
  Stack,
  Flex,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Heading,
} from "@chakra-ui/react";

const RecipeCardList = (props) => {
  return (
    <Stack
      spacing={4}
      w={{ base: "80%", md: "40%" }}
      align={["center", "center", "flex-start", "flex-start"]}
      mt="100px" // Add top margin to push content below the header
      ml="auto" // Automatically align to the right
      mr="auto"
    >
      {props.searchResult ? (
        props.keywords.length !== 0 ? (
          props.searchResult.map((recipe, index) => (
            <RecipeCard
              key={generateUniqueKey(recipe.title)}
              recipe={recipe}
              index={index}
              handleOpenRecipeModal={props.handleOpenRecipeModal}
            />
          ))
        ) : (
          <Heading>No search keyword... Please enter value</Heading>
        )
      ) : (
        ""
      )}
    </Stack>
  );
};

export default RecipeCardList;
