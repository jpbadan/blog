import { Heading, StackDivider } from '@chakra-ui/layout';

import { useColorModeValue } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Stack
      as="article"
      spacing={2}
      justifyContent="center"
      alignItems="flex-start"
      m="1rem auto 2rem auto"
      maxWidth="700px"
      w="100%"
      px={2}
    >
      <Heading
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize="7xl"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        {frontMatter.title}
      </Heading>
      {children}
    </Stack>
  );

}
