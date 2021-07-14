import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  LinkOverlay
} from '@chakra-ui/react';

const BlogCard = ({ ...post }) => {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} boxShadow={'sm'} rounded={'md'} p={4} borderColor='gray.200' borderWidth='1px' maxWidth={['sm', 'md', 'xl']} Maxheight={[200, 200, 250]}>
      <Stack>
        <LinkOverlay href={`/posts/${post.props.id}`}>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize={['md', 'xl', '2xl']} fontFamily={'body'}>
            {post.props.title}
          </Heading>
        </LinkOverlay>
        <Text color={'gray.500'} >
          {post.props.description}
        </Text>
      </Stack>

      <Stack direction={'row'} spacing={2} fontSize={'sm'} mt='3'>
        <Text fontWeight={600}>{post.props.author}</Text>
        <Text color={'gray.500'}>{post.props.publishedAt} · 6min read</Text>
      </Stack>
    </Box>
  );
};

export default BlogCard;
