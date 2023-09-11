import React from "react";
import { Flex } from "@chakra-ui/react";

import SearchModalBodyInput from "./SearchModalBodyInput";
import SearchModalBodyTags from "./SearchModalBodyTags";
import SearchModalBodyRadio from "./SearchModalBodyRadio";
const SearchModalBody = ({ ...props }) => {
  return (
    <Flex direction="column">
      <SearchModalBodyInput {...props} />
      <SearchModalBodyRadio {...props} />
      <SearchModalBodyTags {...props} />
    </Flex>
  );
};

export default SearchModalBody;
