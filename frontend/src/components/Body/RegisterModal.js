import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import RegisterForm from './RegisterForm'

const RegisterModal = ({...props}) => {
  return (
    <Modal
      onClose={props.handleCloseRegister}
      isOpen={props.isOpenRegisterModal}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RegisterForm {...props} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default RegisterModal