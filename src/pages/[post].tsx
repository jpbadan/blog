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


export default function Post(props:PostProps){
  const availableComponents = {FakeContent, Button}
  return (
    <MDXProvider components={availableComponents}>
      <Text as='h1' color='red'>{props.metaInformation.title}</Text>
      <MDX>{props.mdx}</MDX>
    </MDXProvider>

  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'posts')
  const filePath = path.join(folderPath, `${props.params.post}.mdx`)
  const rawFileSource = fs.readFileSync(filePath)

  const { content, data } = matter(rawFileSource)

  return {
    props: {
      mdx: content,
      metaInformation: data,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  
  return{
    paths: createPostPaths(),
    fallback: false
  };
};
