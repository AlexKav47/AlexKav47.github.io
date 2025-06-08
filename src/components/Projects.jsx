import React from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Badge, Icon, useColorModeValue, Image, Button, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; 
import { FaPython, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiPostgresql, SiFirebase,SiTypescript } from 'react-icons/si';
import { DiJavascript } from "react-icons/di";

const projectsData = [
  {
    id: 'asteroid-game',
    title: 'Asteroid Game',
    type: 'WEB APP',
    description: 'My asteroid game is a simple but fun 2D space shooter built with JavaScript and the Canvas API.',
    technologies: [
      { name: 'Javascript', icon: DiJavascript, color: 'blue' },
      { name: 'HTML/CSS', icon: FaHtml5, color: 'green' }
    ],
    imageSrc: '/Game.jpg',
    link: 'https://your-actual-asteroid-game-demo.com',
    githubLink: 'https://github.com/your-username/asteroid-game',
  },
  {
    id: 'project-2',
    title: 'Project 2',
    type: 'Project 2 Type',
    description: 'Project 2 Description',
    technologies: [
      { name: 'Python', icon: FaPython, color: 'yellow' },
      { name: 'Typescript', icon: SiTypescript, color: 'teal' },
    ],
    imageSrc: '/Workinprogress.jpg',
    link: '#',
    githubLink: 'https://github.com/your-username/project2',
  },
  {
    id: 'project-3',
    title: 'Project 3',
    type: 'Project 3 Type',
    description: 'Project 3 Description',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'blue' },
      { name: 'Firebase', icon: SiFirebase, color: 'orange' },
    ],
    imageSrc: '/Workinprogress.jpg',
    link: '#',
    githubLink: 'https://github.com/your-username/project3',
  },
];


function Projects() {
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const githubIconColor = useColorModeValue('gray.700', 'gray.300');
  const githubIconHoverBg = useColorModeValue('gray.100', 'gray.600');
  const githubIconHoverTextColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      id="projects"
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
        Featured Projects
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        maxW="1200px"
        mx="auto"
      >
        {projectsData.map((project, index) => {
          const pathToProjectDetail = `/projects/${project.id}`;
          console.log(`[Projects.jsx] Project: "${project.title}", Generated 'to' prop: "${pathToProjectDetail}"`);

          return (
            <Box
              key={index}
              bg={cardBgColor}
              borderRadius="lg"
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
              overflow="hidden"
              pb={4}
            >
              {project.imageSrc && (
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} project thumbnail`}
                  objectFit="cover"
                  h="180px"
                  w="full"
                  borderBottom="1px solid"
                  borderColor={borderColor}
                  fallbackSrc="/placeholder.jpg" 
                />
              )}

              <Box p={6} textAlign="left">
                <Text fontSize="sm" fontWeight="bold" color="blue.500" mb={1}>
                  {project.type}
                </Text>
                <Flex alignItems="center" justifyContent="space-between" mb={3}>
                  <Heading as="h3" fontSize="xl" fontWeight="semibold" color={textColor} flex="1">
                    {project.title}
                  </Heading>
                  {project.githubLink && (
                    <IconButton
                      as={RouterLink} 
                      href={project.githubLink}
                      isExternal
                      aria-label={`GitHub repository for ${project.title}`}
                      icon={<FaGithub />}
                      variant="ghost"
                      size="md"
                      color={githubIconColor}
                      _hover={{ bg: githubIconHoverBg, color: githubIconHoverTextColor }}
                      borderRadius="full"
                    />
                  )}
                </Flex>

                <Text fontSize="md" color={subTextColor} mb={4} noOfLines={3}>
                  {project.description}
                </Text>

                <Flex wrap="wrap" gap={2} mb={4}>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="subtle"
                      colorScheme={tech.color}
                      borderRadius="md"
                      px={2}
                      py={1}
                      display="flex"
                      alignItems="center"
                    >
                      {tech.icon && <Icon as={tech.icon} mr={1} />}
                      {tech.name}
                    </Badge>
                  ))}
                </Flex>

                <Button
                  as={RouterLink} 
                  to={pathToProjectDetail}
                  variant="outline"
                  colorScheme="cyan"
                  size="sm"
                  mt={2}
                  w="fit-content"
                  fontWeight="bold"
                >
                  Read more
                </Button>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;