import React from 'react'
import {Box, Text, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return(
    <Box flex={1}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text fontSize="lg" fontWeight="bold">
          Flavorful Finds
        </Text>
      </Link>
    </Box>
  )
}

export default Logo