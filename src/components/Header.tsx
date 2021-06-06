import { Flex, Box, Spacer, Heading, HStack, Container, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button"
import styled from '@emotion/styled'
import NextLink from 'next/link'

interface HeaderProps {
    children?: JSX.Element[] | JSX.Element
}

const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        /* backdrop-filter: saturate(180%) blur(20px); */
        /* transition: height .5s, line-height .5s; */
        `

function NavBarContainer ({ children, ...props }){
    return (
      <StickyNav
        as="nav"
        bg="white"
        align="center"
        justify="space-around"
        wrap="wrap"
        w="100%"
        pos="sticky"
        mb={8}
        p={3}

        {...props}
      >
        {children}
      </StickyNav>
    )
  }

function LinkButton ({ children, ...props }){
    return (
        <Button 
            as='a' 
            variant='ghost'
            p={2}
            _hover={{ backgroundColor:'none', color:'green.400'}}     
            {...props}
            >
            {children}
        </Button>
    )
}

export default function Header(props: HeaderProps){
    return(
        <NavBarContainer {...props}>
            <HStack spacing={1} align="center">
                <Box>
                    <Link href="/">
                        <Heading size="lg" mr={6}>Aerospace.express</Heading>
                    </Link>
                </Box>
               <Box>
                   <LinkButton href="/">Home</LinkButton>
               </Box>
               <Box>
                   <LinkButton href="/putterson">Posts</LinkButton>
               </Box>
               <Box>
                   <LinkButton href="/putterson">Projects</LinkButton>
               </Box>
               <Box>
                   <LinkButton href="/putterson">Contact</LinkButton>
               </Box>
            </HStack>
                <LinkButton href='/putterson'>O</LinkButton>
        </NavBarContainer>
    )
}   