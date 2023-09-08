import React from 'react'
import {
  InputGroup,
  Input
} from '@chakra-ui/react'


const Username = ({
  onChange,
  value
}) => {
  return (          
  <InputGroup>
    <Input type='text' placeholder='Username' onChange={onChange} value={value} />
  </InputGroup>)
}


export default Username