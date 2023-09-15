import React from "react";
import { RadioGroup, Stack, Radio } from "@chakra-ui/react";

const SearchModalBodyRadio = ({ ...props }) => {
  return (
    <RadioGroup colorScheme="green" onChange={props.handleRadioChange} value={props.radioValue}>
      <Stack direction="row">
        <Radio value="1">Ingredients</Radio>
        <Radio value="2">Title</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default SearchModalBodyRadio;
