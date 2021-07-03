import { Heading } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/react';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Stack
      as="article"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
      w="100%"
      px={2}
    >
      <Heading size='4xl' color='gray.500'>{frontMatter.title}</Heading>
      {children}
    </Stack>
  );

}
