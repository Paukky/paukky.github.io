import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';

import React from 'react';

const categories = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        name: 'Node.js',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF",
      },
      {
        name: 'Spring Boot',
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
      },
    ],
  },
  {
    title: 'Database',
    items: [
      {
        name: 'MongoDB',
        src: 'https://www.svgrepo.com/show/331488/mongodb.svg',
      },
      {
        name: 'MySQL',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Postman',
        src: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
      },
      {
        name: 'Git',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'JIRA',
        src: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
      },
    ],
  },
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'JavaScript',
        src: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      },
      {
        name: 'HTML',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'C#',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'Java',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
    ],
  },
];

const SkillItem = ({ name, src }) => (
  <VStack spacing={2} w="100px" textAlign="center">
    <Image src={src} alt={name} boxSize="50px" />
    <Text fontSize="md">{name}</Text>
  </VStack>
);

const SkillCategory = ({ title, items }) => (
  <Box>
    <Text fontSize="3xl" fontWeight="bold" mb={4}>
      {title}
    </Text>
    <Flex wrap="wrap" gap={6}>
      {items.map((item) => (
        <SkillItem key={item.name} name={item.name} src={item.src} />
      ))}
    </Flex>
  </Box>
);

const Skill = () => {
  return (
    <Flex direction="column" p="2em" gap="2em">
      <Heading fontSize="4xl">My Stack</Heading>
      {categories.map((section) => (
        <SkillCategory
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </Flex>
  );
};

export default Skill;
