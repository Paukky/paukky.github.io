import React, { Suspense, } from 'react';
import {
  Box,
  Container,
  HStack,
  VStack,
  Tag,
  Heading,
  Text,
  Button,
  Image,
  chakra,
} from '@chakra-ui/react';
import { FaCode } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from '../components/Scene';

const Hero = () => (
  <Box pt={32} pb={20} bg="#fbf9f4">
    <Container maxW="container.xl">
      <HStack spacing={12} align="center" direction={{ base: 'column', lg: 'row' }}>
        <VStack align="flex-start" spacing={6} flex="1">
          <Tag bg="#e69a8d" color="white" rounded="full" px={4}>
            👋 Hello, Friend!
          </Tag>
          <Heading as="h1" size="3xl" color="#4a443f" lineHeight="shorter">
          Welcome to my <chakra.span color="#98A98E">Portfolio.</chakra.span>
          </Heading>
          <Text fontSize="xl" color="#7a726a" maxW="lg">
            I’m a software engineer passionate about building clean, user-focused applications and meaningful digital experiences.
          </Text>
        </VStack>
        <Suspense fallback={<Loader/>}>
        <Box flex="1" position="relative">
          <Canvas>
            <Scene></Scene>
          </Canvas>
        </Box>
        </Suspense>
      </HStack>
    </Container>
  </Box>
);

export default Hero;