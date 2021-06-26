import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
import FakeContent from '../components/blogComponents/FakeContent'
import { Button } from "@chakra-ui/button"
import listPostsFileName from '../utils/listPostsFileName';
import { Text } from '@chakra-ui/layout';
import getAllPosts from '../utils/getAllPosts';
import MdxPost from '../interfaces/PostProps';


const blogPosts = getAllPosts();

type PostProps = {
  mdx: string
  metaInformation: {
    title:string
  }
}

function createPostPaths(){
  const posts = []

  listPostsFileName().forEach(file => {
    posts.push({
        'params': 
        {
          'post': path.parse(file).name
        }
      }
      )
    }
  )
  
  // console.log(posts)
  return posts
}


export default function Post({ ... posts }: MdxPost){
  const availableComponents = {FakeContent, Button}
  return (
    <MDXProvider components={availableComponents}>
      <Text as='h1' color='red'>{posts.props.title}</Text>
      <MDX>{posts.content}</MDX>
    </MDXProvider>
    // console.log(posts.props.title)

  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'posts')
  const filePath = path.join(folderPath, `${props.params.post}.mdx`)
  const rawFileSource = fs.readFileSync(filePath)

  const { content, data } = matter(rawFileSource)


  const currentPost = blogPosts.filter(post => post.props.id == props.params.post)
  console.log('AQUIIII', currentPost[0])

  return {
    props: {... currentPost[0]}
  }
}


export const getStaticPaths: GetStaticPaths = async () => {

  const paths = blogPosts.map(post => 
    (
      {
      'params': {
                'post': post.props.id,
              }
            }
          )
        )
  
  return{
    paths: paths,
    fallback: false
  };
};
