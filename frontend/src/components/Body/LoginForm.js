import React from "react";
import {
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const LoginForm = ({...props}) => {
  console.log(props)
  return (    
    <Stack spacing={4}>
      <form onSubmit={props.handleSubmitLogin}>
        <FormControl isRequired>
          <InputGroup>
            <Input type='text' placeholder='username' onChange={props.handleChangeLoginUsername} value={props.loginUsername} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input placeholder='password' type={props.showLoginPassword ? 'text' : 'password'} onChange={props.handleChangeLoginPassword} value={props.loginPassword} />
            <InputRightElement>
              <Button h='1.75rem' size='sm' onClick={props.handleLoginShowPassword} >
                {props.showLoginPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Link to="/home">
          <Button type="submit">Login</Button>
        </Link>
        <Button type="submit" onClick={props.handleOpenRegister}>Register</Button>
      </form>
    </Stack>
  ) 
}

export default LoginForm;