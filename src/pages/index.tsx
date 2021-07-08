import { InferGetStaticPropsType } from 'next';
import getAllPosts from '../utils/getAllPosts';
import { Text, Link, Container, ListItem, List, Box, Heading } from "@chakra-ui/layout";
import { LinkBox, LinkOverlay, Stack } from "@chakra-ui/react";


export default function Index({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const postsList = posts.map((post) =>
    <Stack
      spacing={10}
      justifyContent="space-between"
      m="0 auto 0 auto"
      maxWidth={["sm", "md", "xl"]}
    >
      <ListItem key={post.props.id}>
        <LinkBox as="article" maxW="md" p="5" mb="3" borderWidth="1px" rounded="md" >
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
            12 days ago
          </Box>
          <Heading size="md" my="2">
            <LinkOverlay href={`/posts/${post.props.id}`}>
              {post.props.title}
            </LinkOverlay>
          </Heading>
          <Text>
            {post.props.description}
          </Text>
        </LinkBox>
      </ListItem>
    </Stack>
  );

  return (
    <>
      <Stack
        as="article"
        spacing="5"
        justifyContent="flex-start"
        alignItems="center"
        m="0 auto 4rem auto"
        maxWidth="container.md"
        w="100%"
        px={5}
      >
        <Heading color={['gray.600', 'blue.400', 'red.500']}>A Lista dos nossos posts: </Heading>
        <List>{postsList}</List>
      </Stack>
    </>
  );
}

export const getStaticProps = async () => {

  const allPublishedPosts = getAllPosts().filter(post => post.props.isPublished);

  return {
    props: {
      posts: allPublishedPosts,
    }
  };
};
