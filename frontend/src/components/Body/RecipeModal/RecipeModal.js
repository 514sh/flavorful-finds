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
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={recipe.title}
          borderRadius="lg"
        />
        <ModalCloseButton />
        <ModalBody>
          <ModalTabs recipe={recipe} />
        </ModalBody>
        <ModalFooter>
          {location.pathname !== "/favorites" && <Button value={recipe.id} onClick={handleAddToFavoritesModal}>Add to Favorites</Button>}
          <Button onClick={handleCloseRecipeModal}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
