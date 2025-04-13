import React, { Suspense, } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from '../components/Scene';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Link,
  Hide,
  Image
} from '@chakra-ui/react';

import '../Canvas.css'
import Arrow from '../assets/downarrow.gif'
import Skill from './Skill';
import Project from '../components/Project';

const Home = () => {
  return (
    <React.Fragment>
        <Flex height={"100vh"} marginY={5}>
          <Box textAlign={['center','left','left']} position={['relative','relative','absolute']} zIndex={1} mx={'2.5em'} overflow='hidden' alignSelf={'center'}>
            <Text fontSize={'6xl'} maxWidth={'20ch'}>
                Hi, my name is Paul Ly
            </Text>
            <Text fontSize={'lg'} maxWidth={'40ch'} fontStyle={'italic'}>
                I'm currently sutdying for my Computer Science Degree
            </Text>
            <HStack my={'1em'} spacing='15px' justifyContent={['center','flex-start','flex-start']}>
              <Text>Contact :</Text>
              <Link href="https://github.com/Paukky" isExternal>
                <Icon as={FaGithub} boxSize={'2em'} />
              </Link>
              <Link href="https://www.linkedin.com/in/paul-ly1993/" isExternal>
                <Icon as={FaLinkedin} boxSize={'2em'} />
              </Link>
            </HStack>
            <Flex  align={'center'} justifyContent={['center','flex-start','flex-start']}>
              
              <Text fontStyle={'italic'} fontWeight={200}>Scroll down for more</Text>
              <Image src={Arrow} w={'40px'} />
            </Flex>
          </Box>    
        <Suspense fallback={<Loader/>}>
          <Hide below={'md'}>
        <div style={{ width: "100vw", height: "100vh" }}>    
          <Canvas>
              <Scene/>
          </Canvas>
        </div>
        </Hide>
        </Suspense>
        </Flex>
        <Skill/>
        <Project/>
    </React.Fragment>
  )
}

export default Home