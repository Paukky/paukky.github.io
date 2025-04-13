import { Stack, Image, Text, Link, Heading, Button, Divider, ButtonGroup, HStack } from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { FaCode, FaPaintBrush } from 'react-icons/fa'
import React from 'react'

const CardItem = ({ image, alt, link, desc, design }) => {
  const Icon = design ? FaPaintBrush : FaCode;

  return (
    <Card align="center" maxW="lg" variant="filled" bg="gray.700" color={design ? "pink.300" : "teal.300"}  >
      <CardBody>
        <Stack>
          <Image src={image} borderRadius="lg" objectFit="cover" height={350} width={500} />
          
          <HStack spacing={2}>
            <Icon  />
            <Heading size="lg" textColor={'white'}>{alt}</Heading>
          </HStack>
          
          <Text textColor={'white'}>{desc}</Text>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter>
        <Button colorScheme="green">
          <Link href={link}>Visit</Link>
        </Button>   
      </CardFooter>
    </Card>
  )
}

export default CardItem
