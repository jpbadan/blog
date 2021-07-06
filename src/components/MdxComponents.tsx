import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode
} from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from "@chakra-ui/button";
import Head from 'next/head';

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'pink.500',
    dark: 'pink.500'
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline'
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MdxStyleComponents = {
  h1: (props) => <DocsHeading as="h1" size="xl" pt={5} fontWeight="bold" {...props} />,
  h2: (props) => <DocsHeading as="h2" size="lg" pt={5} fontWeight="bold" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" pt={5} fontWeight="bold" {...props} />,
  h4: (props) => <DocsHeading as="h4" size="sm" pt={5} fontWeight="bold" {...props} />,
  h5: (props) => <DocsHeading as="h5" size="xs" pt={5} fontWeight="bold" {...props} />,
  h6: (props) => <DocsHeading as="h6" size="xs" pt={5} fontWeight="bold" {...props} />,
  inlineCode: (props) => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={0} pl={2} {...props} />,
  ol: (props) => <Box as="ol" pt={0} pl={10} {...props} />,
  li: (props) => <Box as="li" pb={1} pl={2} {...props} />,
  // blockquote: Quote,
};

const MdxCustomComponents = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('./blogComponents/TestComponent')),
  FakeContent: dynamic(() => import('./blogComponents/FakeContent')),
  Button,
  Head,
};

const MdxComponents = {
  ...MdxCustomComponents,
  ...MdxStyleComponents
};

export { CustomLink, Hr, MdxCustomComponents, MdxStyleComponents };
export default MdxComponents;
