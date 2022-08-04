import React from 'react'
import { Flex, Text,Breadcrumb, BreadcrumbItem, BreadcrumbLink, Spacer, Box } from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Box p={3} bgColor={"#673C11"} fontFamily='Saira' display='flex' position={'sticky'}>
        <Text>Paul Ly</Text>
        <Spacer/>
        <Breadcrumb separator=" ">
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
  )
}

export default Navbar