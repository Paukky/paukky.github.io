import '@fontsource/roboto/700.css'
import '@fontsource/saira/500.css'

import React,{useRef} from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import Home from './layout/Home';
import Featured from './components/Featured';
import Project from './components/Project';
import Skill from './layout/Skill';
import { Switch, Route } from 'wouter';
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
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 200, delay: 0 });
  return (  
      <ChakraProvider theme={theme}>
        <div ref={scrollRef} >
              <Home/>
              <Skill/>
              <Project/>
        </div>
      </ChakraProvider> 
    
  );
}

export default App;
