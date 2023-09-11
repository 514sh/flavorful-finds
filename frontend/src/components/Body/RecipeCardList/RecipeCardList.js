import RecipeCard from "../RecipeCard/RecipeCard";
import React from "react";
import { generateUniqueKey } from "../../../utils/helper";


const RecipeCardList = ({...props}) => {
  return (
    <>
    {props.recipeList.map((recipe, index) => (
      <RecipeCard
        key={generateUniqueKey(recipe.title)}
        recipe={recipe}
        index={index}
        handleOpenRecipeModal={props.handleOpenRecipeModal}
      />
    ))}
    </>
  );
};

export default RecipeCardList;
