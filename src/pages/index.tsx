import { Button } from "@chakra-ui/button";
import { Text, Link, Spacer, Container, Heading, ListItem, List } from "@chakra-ui/layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'
import listPosts from '../utils/listPosts';



export default function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>) {
  const lista = posts.map((post) => 
    <ListItem key={post}>
      <Link href={post}>
        {post}
      </Link>
    </ListItem>)

  return (
    <>
    <Container maxWidth="container.md">
     <Text>A lista dos nossos posts: </Text>
      <List>{lista}</List>
     <Text as='strong'>{posts[0].content}</Text>
    </Container>
    
    </>
  )
}

export const getStaticProps = async () => {
  const posts = listPosts();
  // console.log('olar = ',posts)

  return {
    props: {
      posts,
    }
  }
}