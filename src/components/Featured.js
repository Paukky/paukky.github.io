import React from 'react'
import {Box,Tabs,Tab,TabList,TabPanel,TabPanels} from '@chakra-ui/react';
import Card from './Card';
import OnlyFantasia from '../assets/OnlyFantasia.png'
import BlushBar from '../assets/BlushBar.png'
import AdviceGen from '../assets/AdviceGen.png'
import Easybank from '../assets/Easybank.png'
import Github from '../assets/Github.png'
import Choi from '../assets/choi.png'
import Plushie from '../assets/Plushie.png'
const srces = [
  {
   img: Plushie,
   alt: "Plushie Ecommerce",
   link: "https://ecommerce-project-eight.vercel.app/"
  },
  {
    img: BlushBar,
    alt: "Blush Bar Home Page",
    link: "https://blushbar.netlify.app/"
  },
  {
    img: AdviceGen,
    alt: "Advice Generator",
    link: 'https://paukkyadvice.netlify.app'
  },
  {
    img: Easybank,
    alt: 'Easybank Landing Website',
    link: 'https://easybank-paukky.netlify.app'
  },
  {
    img: Github,
    alt: 'Github Profile Searcher',
    link: 'https://githubfindersearcher.netlify.app/'
  },
  {
    img: Choi,
    alt: 'Choi Restaurant',
    link: 'https://genuine-crostata-7d33cd.netlify.app/'
  },
]
const Featured = () => {
  return (
    <Tabs variant={'enclosed'} fontFamily={'Saira'} mx={'2em'} >
      <TabList >
        <Tab>Projects</Tab>
      </TabList>
      <TabPanels>
       <TabPanel>
          <Box
            width={'90%'}
            mx="auto"
            sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
          >
            {srces.map((src) => (
              <Card
                image={src.img}
                alt={src.alt} 
                link={src.link}
              />
            ))}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Featured