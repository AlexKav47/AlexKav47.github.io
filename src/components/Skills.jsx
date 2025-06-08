// src/components/Skills.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Icon,
  SimpleGrid,
  useColorModeValue, 
} from '@chakra-ui/react';

import {FaPython, FaJava,FaHtml5, FaGitAlt, FaAws, FaReact, FaNodeJs, FaBootstrap,FaRegCopyright,} from 'react-icons/fa';
import {SiChakraui,SiTailwindcss,SiAseprite,} from 'react-icons/si';
import {BiLogoVisualStudio,} from 'react-icons/bi';
import { DiJavascript,DiPhotoshop } from "react-icons/di";

import { DiMongodb } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';


function Skills() {
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const subTextColor = useColorModeValue('gray.600', 'gray.400'); 
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const iconColor = useColorModeValue('black.500', 'black.300');
  const borderColor = useColorModeValue('gray.200', 'gray.600'); 

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'HTML/CSS', icon: FaHtml5 },
        { name: 'C', icon: FaRegCopyright },
        { name: 'Javascript', icon: DiJavascript },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'ReactJS', icon: FaReact },
        { name: 'NodeJS', icon: FaNodeJs },
        { name: 'ChakraUI', icon: SiChakraui },
        { name: 'Bootstrap', icon: FaBootstrap },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: GrMysql },
        { name: 'MongoDB', icon: DiMongodb },
      ],
    },
    {
      title: 'Other tools',
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'VS Code', icon: BiLogoVisualStudio }, 
        { name: 'AWS', icon: FaAws },
        { name: 'Aseprite', icon: SiAseprite },
        { name: 'Photoshop', icon: DiPhotoshop },
      ],
    },
  ];

  return (
    <Box
      id="skills"
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 8, lg: 16 }}
      textAlign="center"
    >
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="bold"
        mb={12}
        color={textColor}
      >
        Skills
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={8}
        maxW="1200px"
        mx="auto"
      >
        {skillCategories.map((category) => (
          <Box
            key={category.title}
            bg={cardBgColor} 
            p={6}
            borderRadius="lg"
            boxShadow="md"
            textAlign="left"
            border="1px solid"
            borderColor={borderColor} 
          >
            <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={6} color={textColor}>
              {category.title}
            </Heading>
            <Stack spacing={4}>
              {category.skills.map((skill) => (
                <Flex key={skill.name} align="center">
                  <Icon as={skill.icon} fontSize="2xl" color={iconColor} mr={3} /> 
                  <Text fontSize="lg" color={subTextColor}> 
                    {skill.name}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Skills;