import React from "react";
import {Input} from '@chakra-ui/react'

const SearchModalBodyInput = ({...props}) => {
  return(
    <Input
        value={props.inputValueSearch}
        onChange={props.handleInputChangeSearch}
        onKeyPress={props.handleInputKeyPressSearch}
        placeholder="Type a value and press Enter..."
    />
  )
}


export default SearchModalBodyInput