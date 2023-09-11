import RecipeCardList from "../RecipeCardList/RecipeCardList"
import ListContainer from "../ListContainer";
import React from "react";

const FavoriteRecipeList = ({...props}) => {
  return (
    <ListContainer>
      <RecipeCardList {...props} />
    </ListContainer>
  );
};

export default FavoriteRecipeList;
