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
      console.log(response)
      navigate("/home")
    }
  }
  return (    
    <Stack spacing={4}>
      <form onSubmit={handleSubmitLogin}>
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
        <Button type="submit" >Login</Button>
        <Button type="submit" onClick={props.handleOpenRegister}>Register</Button>
      </form>
    </Stack>
  ) 
}

export default LoginForm;