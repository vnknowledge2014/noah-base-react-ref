import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Heading, Box } from "@chakra-ui/react"

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  useImperativeHandle(ref, () => ({
    changeValue
  }));

  return (
    <Box maxW="32rem">
      <Heading as="h1" size="md">
        {value}
      </Heading>
    </Box>
  );
});

export default DynamicText;
