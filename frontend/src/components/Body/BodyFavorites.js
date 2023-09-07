import React from "react";
import BodyContainer from "./BodyContainer";
import RecipeCard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import { generateUniqueKey } from "../../utils/helper";
const BodyFavorites = ({ ...props }) => {
  return (
    <BodyContainer>
      {props.favoriteRecipes.map((recipe, index) => (
        <RecipeCard
          key={generateUniqueKey(recipe.title)}
          recipe={recipe}
          index={index}
          handleOpenRecipeModal={props.handleOpenRecipeModal}
        />))}
      <RecipeModal {...props} />
    </BodyContainer>
  );
};

export default BodyFavorites;
