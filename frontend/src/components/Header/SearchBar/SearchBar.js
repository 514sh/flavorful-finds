import React from "react"
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import {SearchIcon } from '@chakra-ui/icons'

const SearchBar = ({...props}) => {
  return(
    <InputGroup onClick={props.handleOpenModal} flex={4} display={{ base: "none", md: "block" }}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search..."
        borderRadius="full"
        py="2"
        px="4"
        pr="10"
        bg="white"
        boxShadow="md"
      />
    </InputGroup>
  )
}

export default SearchBar