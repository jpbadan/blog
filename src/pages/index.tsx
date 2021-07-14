import { InferGetStaticPropsType } from 'next';
import getAllPosts from '../utils/getAllPosts';
import { Text, Link, Container, ListItem, List, Box, Heading } from "@chakra-ui/layout";
import { LinkBox, LinkOverlay, Stack, useColorModeValue, Center, Avatar, SimpleGrid } from "@chakra-ui/react";
import BlogCard from '../components/BlogCard';


export default function Index({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const postsList = posts.map((post) =>
    <LinkBox>
      <ListItem key={post.props.id}>
        <BlogCard {...post} />
      </ListItem>
    </LinkBox>
  );

  return (

    <Stack
      spacing='5'

      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      m={"auto"}
      px={[2, 0, 0]}
      width='max'
    // w="100%"
    // px={5}
    >
      <Heading
        color={['gray.600', 'gray.600', 'gray.600']}
        fontSize={['xl', '2xl', '4xl']}
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        ml={[2, 0, '-20']}
      >Latest Posts</Heading>
      {/* <Stack spacing='100px' d='flex' justifyContent="space-between" alignItems='center' m="0 auto 0 auto" maxWidth={["sm", "md", "xl"]} outlineColor='red'> */}


      <List>
        <Stack spacing='2' direction='column'>
          {postsList}
        </Stack>
      </List>

      {/* </Stack> */}
    </Stack>

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
