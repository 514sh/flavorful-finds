import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Text
} from "@chakra-ui/react";
import ModalTabs from "./ModalTabs";
import { useLocation } from 'react-router-dom';

const RecipeModal = ({ recipe, handleCloseRecipeModal, isOpenRecipeModal, handleAddToFavoritesModal }) => {
  const location = useLocation();
  return (
    <Modal
      onClose={handleCloseRecipeModal}
      isOpen={isOpenRecipeModal}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{recipe.title}</ModalHeader>
        <Image
          src={FOOD_IMAGES_URL + recipe.filename + ".jpg"}
          fallbackSrc="images/logo.png"
          alt={recipe.title}
          borderRadius="xl"
          size="lg"
          m={4}
        />
        <ModalCloseButton variant = 'secondary'/>
        <ModalBody>
          <ModalTabs recipe={recipe} />
        </ModalBody>
        <ModalFooter>
          {location.pathname !== "/favorites" && 
          <Button 
            variant = 'main'
            value={recipe.id} 
            onClick={handleAddToFavoritesModal}>Add to Favorites</Button>}
          <Button variant = 'secondary'  onClick={handleCloseRecipeModal}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
