import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaDatabase,
} from 'react-icons/fa';


const categories = [
  {
    title: 'Frontend Development',
    icon: FaLayerGroup,
    iconColor: '#61DAFB',
    skills: [
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend & Systems',
    icon: FaServer,
    iconColor: '#339933',
    skills: [
      'Node.js',
      'REST APIs',
      'Git',
      'CLI Tools',
    ],
  },
  {
    title: 'Languages',
    icon: FaCode,
    iconColor: '#E69A8D',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'Rust',
      'SQL',
      'HTML/CSS',
    ],
  },
  {
    title: 'Databases & Tools',
    icon: FaDatabase,
    iconColor: '#FF6C37',
    skills: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Postman',
      'GitHub',
    ],
  },
];

const SkillCard = ({ name, icon, color }) => {
  const bg = useColorModeValue('#ffffff', 'gray.800');
  const border = useColorModeValue('#ece7df', 'gray.700');

  return (
    <HStack
      spacing={3}
      p={3}
      rounded="xl"
      bg="#302113"
      border="1px solid"
      borderColor={border}
      transition="0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        borderColor: '#98A98E',
      }}
    >
      <Icon as={icon} boxSize={5} color={color} />
      <Text fontSize="sm" fontWeight="medium">
        {name}
      </Text>
    </HStack>
  );
};

const SkillCategory = ({ title, icon, iconColor, skills }) => (
  <VStack
    bg="#fffbbcf3"
    p={8}
    rounded="3xl"
    align="flex-start"
    spacing={5}
    position="relative"
    boxShadow={`8px 8px 0 ${iconColor}20`}
    transition="0.2s ease"
    _hover={{
      transform: 'translateY(-4px)',
      boxShadow: `12px 12px 0 ${iconColor}30`,
    }}
  >
    <HStack spacing={3}>
      <Icon as={icon} boxSize={6} color={iconColor} />
      <Heading size="sm" color="#000000">
        {title}
      </Heading>
    </HStack>

    <VStack align="flex-start" spacing={2} w="100%">
      {skills.map((skill) => (
        <Text
          key={skill}
          fontSize="sm"
          color="#7a726a"
          fontWeight="medium"
        >
          • {skill}
        </Text>
      ))}
    </VStack>
  </VStack>
);

const Skills = () => {


  return (
    <Container maxW="6xl" py={20} bg="">
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center" size="2xl" color="#4a443f">
          Skills & Technologies
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {categories.map((category) => (
                <SkillCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
                iconColor={category.iconColor}
                skills={category.skills}
                />
            ))}
            </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Skills;