import React from "react";
import BodyContainer from "../BodyContainer";
import RecipeModal from "../RecipeModal/RecipeModal";
import FavoriteRecipeList from "./FavoriteRecipeList";

const FavoritesMain = ({ ...props }) => {
  return (
    <BodyContainer>
      <FavoriteRecipeList {...props} />
      <RecipeModal {...props} />
    </BodyContainer>
  );
};

export default FavoritesMain;
