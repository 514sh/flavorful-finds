import React from 'react'
import { Box, Stack, Button } from '@chakra-ui/react'

import MenuItem from './MenuItem';
import userRecipeMappingService from "../../../services/user_recipe_mapping"


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
          }
          setLocation={props.setLocation}
        >
          Search
        </MenuItem>
        <MenuItem to="/home"  setLocation={props.setLocation}>Home</MenuItem>
        <MenuItem to="/about" setLocation={props.setLocation}>About</MenuItem>
        { userRecipeMappingService.getCookie("userId") && <MenuItem to="/favorites" setLocation={props.setLocation}>Favorites</MenuItem>}
        <MenuItem to="/login" onClick={props.handleLogout} setLocation={props.setLocation} isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            {userRecipeMappingService.getCookie("userId") ? "Logout":"Login"}
          </Button>
        </MenuItem>
      </Stack>
    </Box>
    </>
  )
}

export default MenuLinks