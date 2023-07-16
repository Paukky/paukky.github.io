import { Stack,Image,Text,Link, Heading,Button, Divider, ButtonGroup,} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'


const CardItem = ({image, alt, link, desc,design}) => {

  return (

    <Card align={'center'} maxWidth={'lg'} variant={'filled'}>
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
                  <Button colorScheme={'green'} variant={'ghost'}>Code</Button>
                </ButtonGroup>
              )}
        </CardFooter>
    </Card>
      // <Box display={'flex'} alignItems={'center'} justifyContent={'center'} role="group">
 
      //   <Text 
      //     position={"absolute"} 
      //     fontSize={'2xl'}
      //     zIndex={1} 
      //     opacity="0%"
      //     _groupHover={{
      //       transitionDuration:'0.25s',
      //       opacity: '100%'
      //     }}
      //     >
      //     {alt}
      //   </Text>
      //   <Link href={link} isExternal>
      //     <Image 
      //       borderRadius={'xl'} 
      //       mb={2}
      //       src={image}
      //       alt={alt}
      //       _groupHover={{
      //         transitionDuration:'0.25s',
      //         filter: 'auto',
      //         blur:'3px',
      //         brightness: '30%'          
      //       }}
      //     />
      //   </Link>

      // </Box>
  
  )
}

export default CardItem