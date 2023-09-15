import React from "react";
import {
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const LoginForm = ({...props}) => {
  const navigate = useNavigate()
  const handleSubmitLogin = async (e) => {
    const response = await props.handleSubmitLogin(e)
    if (response){
      navigate("/home")
    }
  }
  return (    
    <Stack spacing={4}>
      <form onSubmit={handleSubmitLogin}>
        <FormControl isRequired>
          <InputGroup>
            <Input focusBorderColor='primary.700' type='text' placeholder='username' onChange={props.handleChangeLoginUsername} value={props.loginUsername} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input focusBorderColor='primary.700' placeholder='password' type={props.showLoginPassword ? 'text' : 'password'} onChange={props.handleChangeLoginPassword} value={props.loginPassword} />
            <InputRightElement>
              <Button variant='secondary' h='1.75rem' size='sm' onClick={props.handleLoginShowPassword} >
                {props.showLoginPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button variant='main' type="submit" >Login</Button>
        <Button variant='main' type="submit" onClick={props.handleOpenRegister}>Register</Button>
      </form>
    </Stack>
  ) 
}

export default LoginForm;