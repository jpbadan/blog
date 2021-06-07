import { Flex, Box, Spacer, Heading, HStack, Container, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button"
import styled from '@emotion/styled'
import {FiSearch, FiSun} from 'react-icons/fi'

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
        // padding={2}
        borderBlockEndWidth={1}
        borderBlockEndColor='gray.800'
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
            py={6}
            // borderBottomWidth={2}
            // borderBottomColor='black'
            _hover={{ backgroundColor:'none', color:'cyan.800'}}     
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
                    <Link href="/" _hover={{textDecoration:'none'}} _focus={{outline:'none'}}>
                        <Heading size="lg" mr={8} paddingBottom={1}>Aerospace.Express</Heading>
                    </Link>
                </Box>
               <Box>
                   <LinkButton href="/">Home</LinkButton>
               </Box>
               <Box>
                   <LinkButton href="/putterson">Blog</LinkButton>
               </Box>
               <Box>
                   <LinkButton href="/putterson">Projects</LinkButton>
               </Box>
               <Box>
                   <LinkButton href="/putterson">Contact</LinkButton>
               </Box>
            </HStack>
            <HStack spacing={1} align="center">
                <LinkButton href='/putterson'><FiSearch /></LinkButton>
                <LinkButton href='/putterson'><FiSun /></LinkButton>
            </HStack>
        </NavBarContainer>
    )
}   