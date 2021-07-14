import { Heading, StackDivider } from '@chakra-ui/layout';
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
      <Heading size='3xl' color='black' mb='16'>{frontMatter.title}</Heading>
      {children}
    </Stack>
  );

}
