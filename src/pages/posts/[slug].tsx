import { GetStaticPaths } from 'next';
import getAllPosts from '../../utils/getAllPosts';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { POSTS_PATH } from '../../utils/mdxUtils';
import BlogLayout from '../../components/BlogLayout';
import MdxComponents from '../../components/MdxComponents';


export default function PostPage({ source, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={MdxComponents} />
    </BlogLayout>


  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map(post =>
  (
    {
      'params': {
        'slug': post.props.id,
      }
    }
  )
  );

  return {
    paths,
    fallback: false,
  };
};
