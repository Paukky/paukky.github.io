import {Text,Box,Image,Heading } from '@chakra-ui/react'
import { Container, Center} from '@chakra-ui/react';
import { motion} from 'framer-motion';
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

import Python from"../assets/python-svgrepo-com.png" 
import Javascript from  "../assets/javascript.png"
import HTML5 from "../assets/html-5.png"
import CSS3 from "../assets/css-3.png"
import ReactIcon from "../assets/reactjs.png"
import NodeIcon from "../assets/node-js.png"
import NextIcon from "../assets/nextjs.png"
import MySql from "../assets/mysql.png"

const Skill = () => {
  return (
  <Center
    height={'100vh'}
    flexDir={'column'}
    align={'center'}
    as={motion.div}
    initial={{
      opacity: 0,
      y: 500
    }}
    whileInView={{  
      opacity: 1,
      y: 0
    }}  
    onViewportLeave={{
      opacity: 0
    }}
  >
    <Box mb={10}>
      <Heading  size={'3xl'} >Skills</Heading>
      <Text fontWeight={"light"}>These are the skills I acquired over my journey. something something</Text>
    </Box>
    <Grid 
      templateColumns={'repeat(4,2fr)'} gap={10}
    >
      <GridItem>
        <Image src={Python} width={"15vw"} maxWidth={"150px"}/>
        <Text>Python</Text>
      </GridItem>
      <GridItem>
        <Image src={Javascript}  width={"15vw"} maxWidth={"150px"}/>
        <Text>Javascript</Text>
      </GridItem>
      <GridItem>
        <Image src={HTML5}  width={"15vw"} maxWidth={"150px"}/>
        <Text>HTML5</Text>
      </GridItem>
      <GridItem>
        <Image src={CSS3}  width={"15vw"} maxWidth={"150px"}/>
        <Text>CSS3</Text>
      </GridItem>
      <GridItem>
        <Image src={ReactIcon}  width={"20vw"} maxWidth={"150px"}/>
        <Text>React</Text>
      </GridItem>
      <GridItem>
        <Image src={NodeIcon}  width={"20vw"} maxWidth={"150px"}/>
        <Text>NodeJS</Text>
      </GridItem>
      <GridItem>
        <Image src={NextIcon}  width={"20vw"} maxWidth={"150px"}/>
        <Text>NextJS</Text>
      </GridItem>
      <GridItem>
        <Image src={MySql}  width={"20vw"} maxWidth={"150px"}/>
        <Text>MySql</Text>
      </GridItem>

    </Grid>
  </Center>
  )
}

export default Skill