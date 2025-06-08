import React from 'react';
import { Box,Heading,Text,Flex,Image,Stack,Icon,Link,useColorModeValue } from '@chakra-ui/react';
import {FaUser,FaGraduationCap,FaLaptopCode,FaCode,FaCamera } from 'react-icons/fa';

function AboutMe() {
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const linkColor = useColorModeValue('teal.500', 'blue.300'); 

  const AboutParagraph = ({ icon, children }) => (
    <Flex align="flex-start" mb={4}> 
      <Icon as={icon} fontSize="xl" color={linkColor} mr={3} mt={1} /> 
      <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} textAlign="left">
        {children}
      </Text>
    </Flex>
  );

  return (
    <Box
      id="about" 
      py={{ base: 16, md: 20 }} 
      px={{ base: 4, md: 8, lg: 16 }} 
      backgroundRepeat="repeat"
      backgroundAttachment="fixed"
      textAlign="center"
    >
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="bold"
        mb={12} 
        color={textColor}
      >
        About me
      </Heading>

      <Stack
        direction={{ base: 'column', lg: 'row' }} 
        spacing={{ base: 8, lg: 16 }} 
        align="center" 
        justify="center" 
        maxW="1200px" 
        mx="auto"    
      >
        <Box flexShrink={0}> 
          <Image
            borderRadius="full"
            boxSize={{ base: '180px', md: '220px', lg: '200px' }} 
            src={`${process.env.PUBLIC_URL}/Selfie.jpg`}
            alt="Alex Kavanagh Profile Picture"
            objectFit="cover"
            shadow="xl"
            border="3px solid" 
          />
        </Box>

        <Box maxW={{ lg: '60%' }}> 
          <AboutParagraph icon={FaUser}>
            Hi, I'm Alex and I'm a fourth year student at <Text as="span" fontWeight="bold">South East Technological University</Text> with a passion for <Text as="span" fontWeight="bold">Technology</Text>.
          </AboutParagraph>

          <AboutParagraph icon={FaGraduationCap}>
            I'm pursuing an <Text as="span" fontWeight="bold">BSC in Information Technology Management</Text>, graduating class of 2025.
          </AboutParagraph>

          <AboutParagraph icon={FaLaptopCode}>
            I am currently a <Text as="span" fontWeight="bold">free lance Software Developer</Text> and I have previously went studied abroad in Japan at <Text as="span" fontWeight="bold">Shibaura Institute Of Technology</Text> for 6 months. 
          </AboutParagraph>

          <AboutParagraph icon={FaCode}>
            Im particularly interested in <Text as="span" fontWeight="bold">back-end development</Text>, system design, and side projects that blend technical function with visual creativity.
          </AboutParagraph>

          <AboutParagraph icon={FaCamera}>
            In addition to Information Technology, I am also interested in <Text as="span" fontWeight="bold">artificial intelligence</Text> and machine learning, as well as art! Check out my{' '}
            <Link href="https://www.artstation.com/apkgraphics47" isExternal color={linkColor} fontWeight="bold" textDecoration="underline">
              art portfolio
            </Link>{' '}
            to learn more about my creative work.
          </AboutParagraph>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutMe;