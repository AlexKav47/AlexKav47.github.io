import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom'; 
import {
  Box,
  Heading,
  Text,
  Flex,
  Badge,
  Image,
  useColorModeValue,
  Button,
  Icon,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  HStack,
  Link as ChakraLink, 
} from '@chakra-ui/react';

import { FaPython, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiPostgresql, SiFirebase, SiTypescript } from 'react-icons/si';
import { MdOutlineComputer } from 'react-icons/md';
import { DiJavascript } from "react-icons/di";

const projectsData = [
    {
      id: 'asteroid-game',
      title: 'Asteroid Game',
      type: 'WEB APP',
      description: 'My asteroid game is a simple but fun 2D space shooter built with JavaScript and the Canvas API.',
      fullDescription: 'My asteroid game is a simple but fun 2D space shooter built with JavaScript and the Canvas API. The player controls a spaceship that moves up and down while shooting bullets to destroy incoming asteroids. They spawn from the right side at random speeds and sizes, and if one hits the player, the game resets. Theres basic collision detection for both the player and bullets, a score system, and a game loop that handles starting, playing, and game over states. The asteroid spawner keeps things dynamic, making for a fast-paced and replayable arcade-style experience. ',
      technologies: [
        { name: 'Javascript', icon: DiJavascript, color: 'blue' },
        { name: 'HTML/CSS', icon: FaHtml5, color: 'green' },
      ],
      imageSrc: '/Game.jpg',
      link: 'https://alexkav47.github.io/Asteroid-Game.github.io/',
      githubLink: 'https://github.com/AlexKav47/Asteroid-Game.github.io',
      sections: [
        { heading: 'Project Background', content: 'The idea behind the Asteroid Game was to create a fun and challenging web-based game. It allowed me to explore real-time interaction and physics simulation within a browser environment.' },
        { heading: 'Technical Challenges', content: 'One of the main challenges was optimizing rendering performance for smooth gameplay, especially with multiple asteroids on screen. Implementing accurate collision detection also required careful mathematical consideration.' },
        { heading: 'Future Enhancements', content: 'Potential future enhancements include adding multiple levels, different enemy types, power-ups, and a global leaderboard.' }
      ]
    },
    {
      id: 'project-2',
      title: 'Project 2',
      type: 'WEB APP',
      description: 'Project 2 Description',
      fullDescription: 'Detailed description for Project 2.',
      technologies: [
        { name: 'Python', icon: FaPython, color: 'yellow' },
        { name: 'Typescript', icon: SiTypescript, color: 'teal' },
      ],
      imageSrc: '/Workinprogress.jpg',
      link: '#',
      githubLink: 'https://github.com/your-username/project2',
      sections: []
    },
    {
      id: 'project-3',
      title: 'Project 3',
      type: 'DATA SCIENCE',
      description: 'Project 3 Description',
      fullDescription: 'Detailed description for Project 3.',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'blue' },
        { name: 'Firebase', icon: SiFirebase, color: 'orange' },
      ],
      imageSrc: '/Workinprogress.jpg',
      link: '#',
      githubLink: 'https://github.com/your-username/project3',
      sections: []
    },
];


function ProjectDetail() {
  const { projectId } = useParams();

  console.log(`[ProjectDetail.jsx] Component rendered. projectId from URL: "${projectId}"`);

  const project = projectsData.find(p => p.id === projectId);

  console.log(`[ProjectDetail.jsx] Result of projectsData.find():`, project);

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  if (!project) {
    console.error(`[ProjectDetail.jsx] ERROR: Project data NOT found for ID: "${projectId}"`);
    return (
      <Container maxW="container.md" py={20} textAlign="center" bg={bgColor}>
        <Heading color={textColor}>Project Not Found</Heading>
        <Text color={subTextColor} mt={4}>
          The project you are looking for does not exist.
        </Text>
        <Button as={RouterLink} to="/" mt={6} colorScheme="teal" variant="outline">
          Go to Home
        </Button>
      </Container>
    );
  }

  return (
    <Box py={{ base: 8, md: 12 }} minH="calc(100vh - 80px)">
      <Container maxW="container.lg" px={{ base: 4, md: 8 }}>
        <Breadcrumb separator=">" fontSize="sm" color={subTextColor} mb={6}>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/#projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{project.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box
          position="relative"
          borderRadius="lg"
          overflow="hidden"
          mb={8}
          height={{ base: '200px', md: '300px', lg: '400px' }}
          width="full"
          bg={cardBgColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
        >
          <Image
            src={project.imageSrc}
            alt={`${project.title} hero image`}
            objectFit="cover"
            width="full"
            height="full"
            fallbackSrc="/placeholder.jpg" 
            _after={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'blackAlpha.400',
            }}
          />
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            color="white"
            position="absolute"
            zIndex={1}
            textShadow="0px 2px 4px rgba(0,0,0,0.5)"
          >
            {project.title}
          </Heading>
        </Box>

        <VStack spacing={8} align="stretch">
          <Box p={6} bg={cardBgColor} borderRadius="lg" boxShadow="md" border="1px solid" borderColor={borderColor}>
            <Text fontSize="sm" fontWeight="bold" color="blue.500" mb={2}>
              {project.type}
            </Text>
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" mb={4} color={textColor}>
              {project.title}
            </Heading>
            <Text fontSize="lg" color={subTextColor}>
              {project.fullDescription || project.description}
            </Text>
          </Box>

          <Box p={6} bg={cardBgColor} borderRadius="lg" boxShadow="md" border="1px solid" borderColor={borderColor}>
            <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={4} color={textColor}>
              Tech Stack
            </Heading>
            <Flex wrap="wrap" gap={3} justifyContent={{ base: 'center', md: 'flex-start' }}>
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="solid"
                  colorScheme={tech.color}
                  borderRadius="full"
                  px={4}
                  py={2}
                  display="flex"
                  alignItems="center"
                  fontSize="md"
                  fontWeight="bold"
                >
                  {tech.icon && <Icon as={tech.icon} mr={2} />}
                  {tech.name}
                </Badge>
              ))}
            </Flex>
          </Box>

          {project.sections && project.sections.map((section, sectionIndex) => (
            <Box key={sectionIndex} p={6} bg={cardBgColor} borderRadius="lg" boxShadow="md" border="1px solid" borderColor={borderColor}>
              <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={4} color={textColor}>
                {section.heading}
              </Heading>
              {section.content && (
                <Text fontSize="md" color={subTextColor}>
                  {section.content}
                </Text>
              )}
              {section.points && (
                <VStack align="flex-start" spacing={2} mt={2}>
                  {section.points.map((point, pointIndex) => (
                    <Flex key={pointIndex} alignItems="flex-start">
                      <Icon as={MdOutlineComputer} color="teal.500" mt={1} mr={2} />
                      <Text fontSize="md" color={subTextColor}>{point}</Text>
                    </Flex>
                  ))}
                </VStack>
              )}
            </Box>
          ))}


          <HStack spacing={4} justifyContent="center" mb={8}>
            {project.link && (
              <Button
                as={ChakraLink} 
                href={project.link}
                isExternal
                colorScheme="teal"
                variant="solid"
                size="lg"
                rightIcon={<Icon as={MdOutlineComputer} />}
              >
                View Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button
                as={ChakraLink} 
                href={project.githubLink}
                isExternal
                colorScheme="gray"
                variant="outline"
                size="lg"
                leftIcon={<FaGithub />}
              >
                View Code
              </Button>
            )}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default ProjectDetail;