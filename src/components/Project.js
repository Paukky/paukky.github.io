import React, { useState } from 'react'
import {
  Box, Button, ButtonGroup, SimpleGrid, Flex,Icon
} from '@chakra-ui/react'
import { FaCode, FaPaintBrush } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import CardItem from './CardItem'
import Plushie from '../assets/Plushie.png'
import Choi from '../assets/choi.png'
import Rollraiders from '../assets/Rollraider.png'
import Ff14 from '../assets/FFXIV.png'
import Raidbin from '../assets/raidbin.png'
const MotionBox = motion(Box)

const allProjects = [
  {
    img: Plushie,
    alt: "Plushie Ecommerce",
    link: "https://ecommerce-project-eight.vercel.app/",
    desc: "E-commerce websites",
    design: false
  },
  {
    img: Choi,
    alt: 'Choi Restaurant',
    link: 'https://choitoronto.vercel.app/',
    desc: "The website revamp was undertaken to meet the client's requirements...",
    design: false
  },
  {
    img: Raidbin,
    alt: "Raidbin",
    link: "https://www.raidbin.com/",
    desc: "Created this website to help serve new raiders learn fights with comprehensive guides and visuals",
    design: false
  },
  {
    img: Rollraiders,
    alt: "Rollraiders",
    link: "https://rollraider.carrd.co/",
    desc: "Using Adobe Photoshop, Figma, and my web design expertise",
    design: true
  },
  {
    img: Ff14,
    alt: "Final Fantasy 14 Raid Guide",
    desc: "I developed a comprehensive guide enriched with captivating graphics...",
    design: true
  }
]

const Project = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = allProjects.filter((proj) => {
    if (filter === 'all') return true
    if (filter === 'dev') return !proj.design
    if (filter === 'design') return proj.design
  })

  return (
    <Box mx="2em" py="4em">
      <Flex justify="center" mb={6}>
        <ButtonGroup isAttached variant="solid" colorScheme="teal">
          <Button onClick={() => setFilter('all')} bg={filter === 'all' ? 'teal.400' : 'gray.700'} _hover={{ bg: 'teal.500' }}>
            All
          </Button>
          <Button
            onClick={() => setFilter('dev')}
            bg={filter === 'dev' ? 'teal.400' : 'gray.700'}
            _hover={{ bg: 'teal.500' }}
            leftIcon={<Icon as={FaCode} color="orange.300" />}
          >
            Development
          </Button>

          <Button
            onClick={() => setFilter('design')}
            bg={filter === 'design' ? 'teal.400' : 'gray.700'}
            _hover={{ bg: 'teal.500' }}
            leftIcon={<Icon as={FaPaintBrush} color="pink.300" />}
          >
            Design
          </Button>
        </ButtonGroup>
      </Flex>

      <SimpleGrid spacing={6} minChildWidth="300px">
        <AnimatePresence>
          {filteredProjects.map((proj, index) => (
            <MotionBox
              key={proj.alt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CardItem
                image={proj.img}
                alt={proj.alt}
                link={proj.link}
                desc={proj.desc}
                design={proj.design}
              />
            </MotionBox>
          ))}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  )
}

export default Project
