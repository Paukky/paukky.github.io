import '@fontsource/roboto/700.css'
import '@fontsource/saira/500.css'

import React,{useRef} from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import Home from './layout/Home';
import './Canvas.css'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: 'Saira',
        bg: '#181A1B',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

function App() {

  return (  
      <ChakraProvider theme={theme}>
          <Home/>
      </ChakraProvider> 
    
  );
}

export default App;
