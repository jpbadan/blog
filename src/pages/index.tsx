import { Button } from "@chakra-ui/button";
import { Text, Link, Spacer, Container, Heading, ListItem, List } from "@chakra-ui/layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'
import getAllPosts from "../utils/getAllPosts";
import listPosts from '../utils/listPostsFileName';

const blogPosts = getAllPosts()

export default function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>) {
  const postsList = posts.map((post) => 
    <ListItem key={post.props.id}>
      <Link href={post.props.id}>
        {post.props.title}
      </Link>
    </ListItem>)

  return (
    <>
    <Container maxWidth="container.md">
     <Text>A postsList dos nossos posts: </Text>
      <List>{postsList}</List>
     {/* <Text as='strong'>{posts[1].content}</Text> */}
    </Container>
    
    </>
  )
}

export const getStaticProps = async () => {
  // const posts = listPosts();
  // console.log('olar = ',posts)


  // console.log('posts', posts)
  // console.log(getAllPosts())

  const allPublishedPosts = blogPosts.filter(post => post.props.isPublished)

  return {
    props: {
      posts: allPublishedPosts,
    }
  }
}