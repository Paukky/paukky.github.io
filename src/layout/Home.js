import React, { Suspense } from 'react';
import {Link as WouterLink} from 'wouter';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from '../components/Scene';
import {FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa'
import { motion, isValidMotionProp } from 'framer-motion';
import {
  Center,
  Box,
  Flex,
  Spacer,
  Text,
  HStack,
  Icon
} from '@chakra-ui/react';

import '../Canvas.css'
import Featured from '../components/Featured';

const Home = () => {
  return (
    <React.Fragment>
        <Flex>
          <Box  position={'absolute'} zIndex={1} mx={'2.5em'} overflow='hidden' alignSelf={'center'}>
            <Text fontSize={'4xl'} maxWidth={'16ch'}>
                Hi, my name is Paul
            </Text>
            <Text fontSize={'4xl'} maxWidth={'20ch'}>
                I'm a Front End Developer from Canada
            </Text>
            <Text maxWidth={'40ch'} opacity={'90%'}>
                Self-taught developer that has been on the grind since graduation.
                I have been learning new technology and skills to prove to the employer that I'm useful and versatile.
            </Text>
            <HStack my={'1em'} spacing='15px'>
              <Icon as={FaGithub} boxSize={'1.5em'}/>
              <Icon as={FaLinkedin} boxSize={'1.5em'}/>
              <Icon as={FaFilePdf} boxSize={'1.5em'} alt={"Resume"}/>
            </HStack>
          </Box>    
        <Suspense fallback={<Loader/>}>
          <Canvas>
              <Scene/>
          </Canvas>
        </Suspense>
        </Flex>
        <Center>
          <Flex paddingBlock={1}>              
            <Featured/>
          </Flex>  
        </Center>
    </React.Fragment>
  )
}

export default Home