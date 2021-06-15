import { Button } from "@chakra-ui/button";
import { Text, Link, Spacer, Container, Heading, ListItem, List } from "@chakra-ui/layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'
import getAllPostProps from "../utils/getAllPostProps";
import listPosts from '../utils/listPostsFileName';



export default function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>) {
  const lista = posts.map((post) => 
    <ListItem key={post.postName}>
      <Link href={post.postName}>
        {post.frontMatter.title}
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
  // const posts = listPosts();
  // console.log('olar = ',posts)

  const posts = getAllPostProps();

  return {
    props: {
      posts,
    }
  }
}