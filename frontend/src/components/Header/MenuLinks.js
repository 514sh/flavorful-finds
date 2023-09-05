import React from 'react'
import { Box, Stack, Button } from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons';

import MenuItem from './MenuItem';
import SearchModal from './SearchModal';
import SearchBar from './SearchBar';

const MenuLinks = ({...props}) => {
  return(
    <>
    <Box
      display={{base: props.isOpenMenu ? "block": "none", md: "block"}}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem display={{ base: "block", md: "none" }} 
          onClick={(e) => {
            e.preventDefault()
            props.handleOpenModal()}
          }>
          Search
        </MenuItem>
        <MenuItem to="/home">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/login" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Login
          </Button>
        </MenuItem>
      </Stack>
    </Box>
    </>
  )
}

export default MenuLinks