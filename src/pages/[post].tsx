import { Text, Link, Spacer, Container, Heading} from "@chakra-ui/layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';


import FakeContent from '../components/FakeContent'
import { Button } from "@chakra-ui/button"

type PostProps = {
  mdx: string
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

  console.log(props);

  return {
    props: {
      mdx: content,
      metaInformation: data,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { post: 'teste' } },
      { params: { post: 'teste2' } },
    ],
    fallback: false,
  };
};
