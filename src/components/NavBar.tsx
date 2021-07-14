import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { IoMdClose, IoIosMenu, IoMdMenu } from 'react-icons/io';

import Logo from './Logo';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w='auto'
        color={["black", "black", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <>
    <title>Close</title>
    <IoMdClose size={24} />
  </>
);

const MenuIcon = () => (
  <>
    <title>Menu</title>
    <IoIosMenu size={24} />

  </>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
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

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row", "row"]}
        pt={[4, 4, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">Blog </MenuItem>
        <MenuItem to="/Projects">Projects </MenuItem>
        <MenuItem to="/Contact">Contact </MenuItem>
        <MenuItem to="/boso" >
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "black"]}
            bg={["red.200", "green.200", "blue.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "red.600"]
            }}
          >
            Login
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
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

export default NavBar;
