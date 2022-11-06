import { Box,Image,Text,Link } from '@chakra-ui/react'
import React from 'react'


const Card = ({image, alt, link}) => {

  return (
  <Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} role="group">

        <Text 
          position={"absolute"} 
          fontSize={'2xl'}
          zIndex={1} 
          opacity="0%"
          _groupHover={{
            transitionDuration:'0.25s',
            opacity: '100%'
          }}
          >
          {alt}
        </Text>
        <Link href={link} isExternal>
          <Image 
            borderRadius={'xl'} 
            mb={2}
            src={image}
            alt={alt}
            _groupHover={{
              transitionDuration:'0.25s',
              filter: 'auto',
              blur:'3px',
              brightness: '30%'          
            }}
          />
        </Link>
      </Box>
  </Box>
  )
}

export default Card