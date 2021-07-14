import React from "react";
import { Box, Button, LinkBox, LinkOverlay } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props} >
      <LinkBox >
        <LinkOverlay href='/' >
          <Button fontSize="4xl" background='inherit' _hover={{ backgroundColor: 'inherit' }} _focus={{ outline: 'none' }} _active={{ backgroundColor: 'inherit' }}>
            🐵 🙉 🙊
          </Button>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
}
