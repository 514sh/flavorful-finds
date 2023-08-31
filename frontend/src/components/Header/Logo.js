import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return(
    <Box flex={1}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Link>
    </Box>
  )
}

export default Logo