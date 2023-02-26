import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from '../components/Scene';
import Featured from '../components/Featured';
import {FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa'
import {
  Center,
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Link,
  Hide
} from '@chakra-ui/react';
import '../Canvas.css'
import Resume from '../assets/Paul_Ly_Resume.pdf'
const Home = () => {
  return (
    <React.Fragment>
        <Flex>
          <Box textAlign={['center','left','left']} position={['relative','relative','absolute']} zIndex={1} mx={'2.5em'} overflow='hidden' alignSelf={'center'}>
            <Text fontSize={'4xl'} maxWidth={'16ch'}>
                Hi, my name is Paul
            </Text>
            <Text fontSize={'1rem'} maxWidth={'40ch'} fontStyle={'italic'}>
                I'm a self-taught Front End Developer from Canada
            </Text>
            <HStack my={'1em'} spacing='15px' justifyContent={['center','flex-start','flex-start']}>
            <Link href="https://github.com/Paukky" isExternal>
              <Icon as={FaGithub} boxSize={'1.5em'} />
            </Link>
            <Link href="https://www.linkedin.com/in/paul-ly1993/" isExternal>
              <Icon as={FaLinkedin} boxSize={'1.5em'} />
            </Link>
            <Link href={Resume} download>
              <Icon as={FaFilePdf} boxSize={'1.5em'} alt={"Resume"}/>
            </Link>
            </HStack>
          </Box>    
        
        <Suspense fallback={<Loader/>}>
          <Hide below={'md'}>
          <Canvas>
              <Scene/>
          </Canvas>
        </Hide>
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