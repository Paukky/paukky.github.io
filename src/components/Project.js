import React from 'react'
import {Box, Flex, SimpleGrid,Text, Icon} from '@chakra-ui/react';
import {Tabs,Tab,TabList,TabPanel,TabPanels, TabIndicator} from '@chakra-ui/react';
import {GoProject} from "react-icons/go"
import {FaPaintBrush} from 'react-icons/fa'
import CardItem from './CardItem';
import OnlyFantasia from '../assets/OnlyFantasia.png'
import BlushBar from '../assets/BlushBar.png'
import AdviceGen from '../assets/AdviceGen.png'
import Ff14 from '../assets/FFXIV.png'
import Easybank from '../assets/Easybank.png'
import BanterBox from '../assets/banterbox.png'
import Github from '../assets/Github.png'
import Rollraiders from '../assets/Rollraider.png'
import Choi from '../assets/choi.png'
import Plushie from '../assets/Plushie.png'
const projects = [
    {
     img: Plushie,
     alt: "Plushie Ecommerce",
     link: "https://ecommerce-project-eight.vercel.app/",
     desc: "Crafted a feature-rich e-commerce app with Next.js and Stripe.io backend. Material UI adds stunning styling, while Stripe.js ensures secure payments, making it a powerful platform for online transactions.",
     design: false
    },
    {
      img: Choi,
      alt: 'Choi Restaurant',
      link: 'https://choitoronto.vercel.app/',
      desc: "The website revamp was undertaken to meet the client's requirements and deliver an updated look. A complete redesign of the website's appearance and functionality was executed. By comprehending the client's vision and incorporating their specifications, the goal was to create an aesthetically pleasing and user-friendly online presence that surpassed their expectations.",
      design: false
    },
    {
      img: AdviceGen,
      alt: "Advice Generator",
      link: 'https://paukkyadvice.netlify.app',
      desc: 'As part of the Frontend Mentor challenge, the advice generator was skillfully recreated, providing an opportunity to learn and work with APIs for the first time. This accomplishment demonstrates the ability to adapt and acquire new skills in frontend development, showcasing a strong dedication to excel in the field.',
      design: false
    },
    // {
    //   img: BanterBox,
    //   alt: "BanterBox",
    //   link: 'https://zingy-valkyrie-606701.netlify.app/',
    //   desc: "Although it's not fully finished yet, I was able to successfully deploy a functional real-time chatting application with Google login. This project marked my first time working with Firebase and collaborating with a team during a week-long hackathon.",
    //   design: false
    // },
  ]

  const design = [
    {
      img: Rollraiders,
      alt: "Rollraiders",
      link: "https://rollraider.carrd.co/",
      desc: "Using Adobe Photoshop, Figma, and my web design expertise, I created the website's assets and design while meeting the client's specifications.",
      design: true
    },
    {
      img: Easybank,
      alt: 'Easybank Landing Website',
      link: 'https://easybank-paukky.netlify.app',
      desc: 'As part of the Front-end Mentor challenge, I accomplished the task of recreating the website design and ensuring its responsiveness on all devices.',
      design: true
    },
    {
      img: Ff14,
      alt: "Final Fantasy 14 Raid Guide",
      desc: "I developed a comprehensive guide enriched with captivating graphics, aiming to support and empower the raiding community by providing clear and essential instructions for achieving success.",
      design: true
    }
  ]
const Project = () => {
  return (
    <Tabs mx={'2em'} height={'75vh'} variant={'soft-rounded'} align='center' isFitted>
        <TabList  my={'4em'}>
          <Tab fontSize={'3xl'}>
            <Icon as={GoProject} mx='2'/>  
            <Text>Projects</Text>
          </Tab>
          <Tab fontSize={'3xl'}>
            <Icon as={FaPaintBrush} mx='2'/>  
            <Text>Designs</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              <Flex align={'center'} justify={'center'}>
                <SimpleGrid align={'center'} spacing={10} templateColumns={['repeat(1,4fr)','repeat(3,2fr)']}>
                    {projects.map((src) => (
                        <CardItem
                            image={src.img}
                            alt={src.alt} 
                            link={src.link}
                            desc={src.desc}
                            design={src.design}
                        />
                    ))}
                </SimpleGrid>
              </Flex>
          </TabPanel>
          <TabPanel>
              <Flex align={'center'} justify={'center'}>
                <SimpleGrid align={'center'} spacing={10} templateColumns={['repeat(1,4fr)','repeat(3,1fr)']}>
                    {design.map((src) => (
                        <CardItem
                            image={src.img}
                            alt={src.alt} 
                            link={src.link}
                            desc={src.desc}
                            design={src.design}
                        />
                    ))}
                </SimpleGrid>
              </Flex>
          </TabPanel>
        </TabPanels>
  </Tabs>        
  )
}

export default Project