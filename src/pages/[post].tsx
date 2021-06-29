import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
import FakeContent from '../components/blogComponents/FakeContent';
import { Button } from "@chakra-ui/button";
import { Container, Text, Heading } from '@chakra-ui/layout';
import { Center, Stack } from '@chakra-ui/react';
import getAllPosts from '../utils/getAllPosts';
import MdxPost from '../interfaces/PostProps';



export default function Post({ ...posts }: MdxPost) {
  const mdxStyle = {
    h1: (props) => <Heading color='red.900' size='4xl' {...props} />,
    h2: (props) => <Heading color='red.400' {...props} />,
  };

  const availableComponents = {
    FakeContent,
    Button,
  };

  return (
    <MDXProvider components={availableComponents}>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
        px={2}
      >
        <Heading size='xl'>{posts.props.title}</Heading>
        <MDX components={mdxStyle}>{posts.content}</MDX>
      </Stack>
    </MDXProvider >
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'posts');
  const filePath = path.join(folderPath, `${props.params.post}.mdx`);
  const rawFileSource = fs.readFileSync(filePath);

  const { content, data } = matter(rawFileSource);


  const currentPost = getAllPosts().filter(post => post.props.id == props.params.post);
  // console.log('AQUIIII', currentPost[0]);

  return {
    props: {
      ...currentPost[0]
    }
  };
};


export const getStaticPaths: GetStaticPaths = async () => {

  const paths = getAllPosts().map(post =>
  (
    {
      'params': {
        'post': post.props.id,
      }
    }
  )
  );

  return {
    paths: paths,
    fallback: false
  };
};
