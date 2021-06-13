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
        borderBlockEndColor='gray.400'
        {...props}
      >
            {children}
      </StickyNav>
    )
  }

function SectionButton ({ children, ...props }){
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
                   <SectionButton href="/">Home</SectionButton>
               </Box>
               <Box>
                   <SectionButton href="/boso">Blog</SectionButton>
               </Box>
               <Box>
                   <SectionButton href="/bengoso">Projects</SectionButton>
               </Box>
               <Box>
                   <SectionButton href="/mulato">Contact</SectionButton>
               </Box>
            </HStack>
            <HStack spacing={1} align="center">
                <SectionButton href='/roludo'><FiSearch /></SectionButton>
                <SectionButton href='/teste'><FiSun /></SectionButton>
            </HStack>
        </NavBarContainer>
    )
}   