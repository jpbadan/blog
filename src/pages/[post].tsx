import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
import FakeContent from '../components/blogComponents/FakeContent'
import { Button } from "@chakra-ui/button"
import listPosts from '../utils/listPosts';

type PostProps = {
  mdx: string
}



function postsParams(){
  const posts = []

  listPosts().forEach(file => {
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
        <MDX>{props.mdx}</MDX>
      </MDXProvider>

    )
  }

export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'posts')
  const filePath = path.join(folderPath, `${props.params.post}.mdx`)
  const rawFileSource = fs.readFileSync(filePath)

  const { content, data } = matter(rawFileSource)

  // console.log(props);

  return {
    props: {
      mdx: content,
      metaInformation: data,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  
  return{
    paths: postsParams(),
    fallback: false
  };
};
