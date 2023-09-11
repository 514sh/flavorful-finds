import React from "react";
import BodyContainer from "../BodyContainer";
import HomeRecipeList from "./HomeRecipeList";
import RecipeModal from "../RecipeModal/RecipeModal";
const HomeMain = ({ ...props }) => {
  return (
    <BodyContainer>
      <HomeRecipeList {...props} />
      <RecipeModal {...props} />
      {props.isLoading && <p>loading...</p>}
    </BodyContainer>
  );
};

export default HomeMain;
