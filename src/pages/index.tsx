import { Text, Link, Container, ListItem, List } from "@chakra-ui/layout";
import { InferGetStaticPropsType } from 'next';
import getAllPosts from "../utils/getAllPosts";

const blogPosts = getAllPosts();

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const postsList = posts.map((post) =>
    <ListItem key={post.props.id}>
      <Link href={post.props.id}>
        {post.props.title}
      </Link>
    </ListItem>
  );

  return (
    <>
      <Container maxWidth="container.md">
        <Text as='strong' color='#0000FF'>A Lista dos nossos posts: </Text>
        <List>{postsList}</List>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {

  const allPublishedPosts = blogPosts.filter(post => post.props.isPublished);

  return {
    props: {
      posts: allPublishedPosts,
    }
  };
};
