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
} from "@chakra-ui/react";

import SearchModalBody from "./SearchModalBody";

const SearchModal = ({...props}) => {
  return (
    <Modal
      isOpen={props.isOpenModal}
      onClose={props.handleCloseModal}
      size="md"
      placement="top"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search Recipes</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SearchModalBody {...props} />
        </ModalBody>
        <ModalFooter>
          <Button variant='secondary' onClick={props.handleCloseModal}>
            Close
          </Button>
          <Button variant='main' onClick={props.handleSendSearch}>
            Send
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
