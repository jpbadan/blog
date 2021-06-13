import { Text, Link, Spacer, Container, Heading } from "@chakra-ui/layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'

type Post = {
  author: string
  content: string
}

export default function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
    <Container maxWidth="container.md">
     <Text>Nosso autor é o {posts[0].author} e ele diz: </Text>
     <Text as='strong'>{posts[0].content}</Text>
    </Container>
    
    </>
  )
}

export const getStaticProps = async () => {
  const [author, content] = ['Puttersonboy', 'hoje é o dia de cigarrim, Vamos fumar pra caraalho aqui é o ambiente de putterson porra yeah yeah eu disse']
  const posts:Post[] = [{author, content}]

  return {
    props: {
      posts,
    }
  }
}