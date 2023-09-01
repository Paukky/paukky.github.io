import { Stack,Image,Text,Link, Heading,Button, Divider, ButtonGroup,} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'


const CardItem = ({image, alt, link, desc,design}) => {

  return (

    <Card align={'center'} maxWidth={'lg'} variant={'filled'} colorScheme='black'>
        <CardBody>
          <Stack>
            <Image src={image} borderRadius={"lg"} objectFit='cover' height={350} width={500}/>
            <Heading size={'lg'}>{alt}</Heading> 
            <Text>{desc}</Text>
           </Stack>
          </CardBody>
        <Divider/>
        <CardFooter>    
            {( design ?
                <Button colorScheme={'green'}>Visit</Button>
               : 
                <ButtonGroup>
                  <Button colorScheme={'green'}><Link href={link}>Visit</Link></Button>
                  {/* <Button colorScheme={'green'} variant={'ghost'}>Code</Button> */}
                </ButtonGroup>
              )}
        </CardFooter>
    </Card>
  )
}

export default CardItem