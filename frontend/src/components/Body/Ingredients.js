import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { generateUniqueKey } from "../../utils/helper";

const Ingredients = ({ recipe }) => {
  return (
    <UnorderedList>
      {recipe.ingredients.map((ingredient) => (
        <ListItem key={generateUniqueKey(ingredient)}>{ingredient}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default Ingredients;
