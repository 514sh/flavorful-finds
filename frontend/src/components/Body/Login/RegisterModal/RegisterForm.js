import React from "react";
import {
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl
} from '@chakra-ui/react'

const RegisterForm = ({...props}) => {

  return (    
    <Stack spacing={4}>
      <form onSubmit={props.handleSubmitRegister}>
        <FormControl isRequired>
          <InputGroup>
            <Input type='text' placeholder='username' onChange={props.handleChangeRegisterUsername} value={props.registerUsername} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input placeholder='password' type={props.registerShowPassword ? 'text' : 'password'} onChange={props.handleChangeRegisterPassword} value={props.registerPassword} />
            <InputRightElement>
              <Button h='1.75rem' size='sm' onClick={props.handleRegisterShowPassword} >
                {props.registerShowPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit">Register</Button>
      </form>
    </Stack>
  ) 
}

export default RegisterForm;