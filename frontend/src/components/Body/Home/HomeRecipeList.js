import RecipeCardList from "../RecipeCardList/RecipeCardList"
import ListContainer from "../ListContainer";
import React from "react";
import {
  Heading
} from "@chakra-ui/react";

const HomeRecipeList = ({...props}) => {
  return (
    <ListContainer>
      {props.recipeList ? (
        props.keywords.length !== 0 ? (
          <RecipeCardList {...props} />
        ) : (
          <Heading>No search keyword... Please enter value</Heading>
        )
      ) : (
        ""
      )}
    </ListContainer>
  );
};

export default HomeRecipeList;
