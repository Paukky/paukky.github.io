import React from 'react';
import {
  Flex,
  Heading,
  HStack,
  Button,
} from '@chakra-ui/react';

const NavBar = () => (
  <Flex
    as="nav"
    position="fixed"
    top="0"
    w="100%"
    zIndex="100"
    bg="rgba(251, 249, 244, 0.9)"
    backdropFilter="blur(10px)"
    px={8}
    py={4}
    justify="space-between"
    align="center"
    borderBottom="1px solid"
    borderColor="rgba(0,0,0,0.05)"
  >
    <Heading size="md" color="#4a443f" letterSpacing="tight">Paul Ly</Heading>
    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
      <Button
        bg="#98A98E"
        color="white"
        rounded="full"
        _hover={{ bg: '#86987c' }}
        px={6}
      >
        Download CV
      </Button>
    </HStack>
  </Flex>
);

export default NavBar;
