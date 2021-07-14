import {
  Box,
  Stack,
  StackDivider,
  Heading,
  useColorModeValue,
  ButtonGroup,
  ButtonGroupProps,
  chakra,
  HTMLChakraProps,
  Button,
  Input,
  Text,
  useToken,
  IconButton,
  Link,
  SimpleGrid,
  SimpleGridProps,
  TextProps
} from '@chakra-ui/react';

import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { BiHeart, BiCopyright } from 'react-icons/bi';
import { HeadingProps } from '@chakra-ui/layout';

import Logo from './Logo';

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" pt={[12, 12, 24]} pb="12" px={{ base: '4', md: '8' }}>
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
        <Box flex="1">
          <Logo
            w='auto'
            color={["black", "black", "primary.500", "primary.500"]}
          />
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '10', md: '20' }}>
          <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
          <SubscribeForm width={{ base: 'full', md: 'sm' }} />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright fontSize="sm" />
        <SocialMediaLinks pb={[8, 0, 0]} />
      </Stack>
    </Stack>
  </Box>
);

const Copyright = (props: TextProps) => (
  <Box >
    <Stack spacing="2" direction={{ base: 'column', md: 'column' }} alignItems={['center', 'center', 'start']}>
      <Text {...props} >
        &copy; {new Date().getFullYear()} João Pedro BADAN, All rights reserved.</Text>
      <Box as='span' d='flex' alignItems='center'>
        <Text {...props}>Made with</Text>
        <BiHeart style={{ marginLeft: 2, marginRight: 2 }} />
        <Text  {...props}>
          in Toulouse
        </Text>
        <GiAirplaneDeparture style={{ marginLeft: 2, marginRight: 2 }} />
      </Box>
    </Stack>




  </ Box>
);

const FooterHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);

const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">JPBADAN.COM</FooterHeading>
      <Stack>
        <Link href='/'>Home</Link>
        <Link href='/'>Blog</Link>
        <Link href='https://putterson.jpbadan.com'>Projects</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Contact</FooterHeading>
      <Stack>
        <Link href='/about'>About</Link>
        <Link href='mailto:jpbadan@gmail.com'>Reach me out</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);




const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.linkedin.com/in/jpbadan" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://www.github.com/jpbadan" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
  </ButtonGroup>
);



const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>Subscribe to the newsletter</FooterHeading>
        <Text>Get emails about aerospace, tech, and early access to new articles.</Text>
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
          <Input
            bg={useColorModeValue('white', 'inherit')}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor={useColorModeValue('green.500', 'green.300')}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue('gray.500', 'whiteAlpha.700'),
            }}
          />
          <Button
            type="submit"
            colorScheme="green"
            flexShrink={0}
            width={{ base: 'full', md: 'auto' }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};

export default Footer;
