import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Divider, TextProps, useColorModeValue } from "@chakra-ui/react";
import { IoMdClose, IoIosMenu, IoMdMenu } from 'react-icons/io';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { BiHeart, BiCopyright } from 'react-icons/bi';



const Footer = (props) => {


  return (
    <>

      <NavBarContainer {...props}>
        <Box
          as='footer'
          role="contentinfo"
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Divider my={['2', '4', '8']} w={['sm', 'md', '2xl']} />
          <Stack
            spacing={[8, 12, 16]}
            justify={["center", "center", "center"]}
            direction={["column", "row", "row"]}
            mt={['8', '12', '16']}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/">Blog </MenuItem>
            <MenuItem to="/Projects">Projects </MenuItem>
            <MenuItem to="/Contact">About </MenuItem>
          </Stack>

        </Box>

      </NavBarContainer>
      {/* <FooterLiner /> */}
      <Copyright />

    </>
  );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      w="100%"
      mb={2}
      px={8}
      py={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["black", "black", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

const FooterLiner = ({ ...props }) => {
  return (
    <Box
      flexBasis={{ base: "100%", md: "auto" }}>

      <Stack
        direction='row'
        align="center"
        justify='center'
        m={[5, 7, 10]}
        alignItems='center'
        textColor='gray.500'
        fontSize={['xx-small', 'small', 'medium']}
        {...props}
      >
        <Box as='span'>
          <BiCopyright style={{ margin: -5 }} />
        </Box>
        <Text>
          2021 João Pedro Badan | Made with
        </Text>
        <Box as='span'>
          <BiHeart style={{ margin: -5 }} />
        </Box>
        <Text>
          in Toulouse
        </Text>
        < Box as='span' >
          <GiAirplaneDeparture style={{ margin: -3 }} />
        </Box >
      </Stack>
    </Box>

  );

};

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} João Pedro BADAN, All rights reserved.
  </Text>
);



export default Footer;
