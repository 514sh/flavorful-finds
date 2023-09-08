import React from 'react'
import {
  InputGroup,
  Input,
  InputRightElement,
  Button
} from '@chakra-ui/react'

const Password = ({
  showPassword, 
  onChange, 
  value,
  onClick
}) => {
  return (
  <InputGroup>
    <Input placeholder='password' type={showPassword ? 'text' : 'password'} onChange={onChange} value={value} />
    <InputRightElement>
      <Button h='1.75rem' size='sm' onClick={onClick} >
        {showPassword ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>
  )
}
export default Password