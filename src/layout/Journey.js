import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Tag,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { FaRobot, FaLayerGroup, FaChartLine} from 'react-icons/fa';

// Assortment of tag colors fitting the 'Cozy Engineering' scheme
const tagStyles = {
  frontend: { bg: '#e69a8d', color: 'white' },    // Warm Coral
  backend: { bg: '#98A98E', color: 'white' },     // Sage Green
  tools: { bg: '#4a443f', color: 'white' },       // Charcoal Brown
  databases: { bg: '#8fa5b5', color: 'white' },   // Dusty Blue
  languages: { bg: '#b3a2c7', color: 'white' },   // Muted Purple
  default: { bg: '#f5f3ee', color: '#7a726a' }    // Soft Cream
};

const JourneyItem = ({ icon, tags=[], title, desc, iconColor }) => (
  <VStack bg="#fbf9f4" p={8} rounded="3xl" align="flex-start" spacing={2}>
    <HStack spacing={3}>
      <Icon as={icon} boxSize={6} color={iconColor} />
      <Heading size="sm" color="#000000">{title}</Heading>
    </HStack> 
    <Wrap spacing={2}>
      {tags.map((tag) => (
        <WrapItem key={tag.label}>
          <Tag 
            size="sm" 
            rounded="full" 
            px={3} 
            bg={tagStyles[tag.type]?.bg || tagStyles.default.bg} 
            color={tagStyles[tag.type]?.color || tagStyles.default.color}
            fontWeight="bold"
            fontSize="xs"
          >
            {tag.label}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
    <Text fontSize="sm" color="#7a726a">{desc}</Text>
  </VStack>
);

const Journey = () => (
  <Box py={20} bg="white">
    <Container maxW="container.lg">
      <VStack spacing={8}>
        <VStack spacing={2}>
          <Heading color="#4a443f">Featured Projects</Heading>
          <Text color="#000000">What I've Built.</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <JourneyItem 
            icon={FaRobot} 
            title="FFXIV Discord Bot" 
            tags={[
              { label: 'Rust', type: 'languages' },
              { label: 'MongoDB', type: 'databases' }
            ]}
            desc="Built a Rust-based Discord bot for tracking member activity, sales records, and in-game mercenary data." 
            iconColor="#e69a8d"
          />

          <JourneyItem 
            icon={FaLayerGroup} 
            title="Raidbin" 
            tags={[
              { label: 'React', type: 'frontend' },
              { label: 'Javascript', type: 'languages' },
              { label: 'HTML', type: 'frontend' },
              { label: 'CSS', type: 'frontend' },
              { label: 'MongoDB', type: 'databases' }
            ]}
            desc="Developed a responsive React platform focused on accessibility, discoverability, and user experience." 
            iconColor="#98A98E"
          />

          <JourneyItem 
            icon={FaChartLine} 
            title="User Drop Rate Tracker" 
            tags={[
              { label: 'Python', type: 'languages' },
              { label: 'Flask', type: 'backend' },
              { label: 'MySQL', type: 'databases' }
            ]}
            desc="Built a full-stack analytics platform for tracking user drop rates, visualizing trends, and generating gameplay insights." 
            iconColor="#4a443f"
          />
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

export default Journey;