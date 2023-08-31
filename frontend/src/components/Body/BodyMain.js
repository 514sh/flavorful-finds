import React from "react";
import { Flex } from "@chakra-ui/react";
import BodyContainer from "./BodyContainer";
import RecipeCardList from "./RecipeCardList";
import RecipeModal from "./RecipeModal";
const BodyMain = ({ ...props }) => {
  return (
    <BodyContainer>
      <RecipeCardList {...props} />
      <RecipeModal {...props} />
      {props.isLoading && <p>loading...</p>}
    </BodyContainer>
  );
};

export default BodyMain;
