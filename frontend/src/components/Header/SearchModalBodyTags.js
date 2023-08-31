import React from "react"
import {Flex,Tag,TagLabel,TagCloseButton} from '@chakra-ui/react'

const SearchModalBodyTags = (props) => {
  return(
    <Flex mt={2} flexWrap="wrap">
      {props.valuesSearch.map((value, index) => (
        <Tag key={index} size="lg" variant="solid" colorScheme="blue" mr={2} mt={2}>
          <TagLabel>{value}</TagLabel>
          <TagCloseButton onClick={() => props.handleTagClose(index)} />
        </Tag>
      ))}
    </Flex>
  )
}

export default SearchModalBodyTags