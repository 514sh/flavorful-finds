import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonForm = ({type, onClick, message}) => {
  return (
    <Button type={type || 'submit'} onClick={onClick}>{message}</Button>
  )
}

export default ButtonForm