import React from 'react';
import { Box,Flex,Spacer,Link,Text,IconButton,useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'; 

function Header() {
  const { colorMode, toggleColorMode } = useColorMode(); 
  const headerBg = useColorModeValue('gray.50', 'gray.800'); 
  const textColor = useColorModeValue('gray.800', 'white'); 
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  
  return (
    <Box
      as="header" 
      bg={headerBg}
      color={textColor}
      py={4} 
      px={{ base: 4, md: 8 }} 
      borderColor={useColorModeValue('gray.200', 'gray.700')} 
      boxShadow="sm" 
    >
      <Flex align="center"> 
        <Text fontSize="1xl" fontWeight="bold">
          Alex Kavanagh
        </Text>
        <Spacer /> 

        <Flex as="nav" gap={{ base: 4, md: 8 }} mr={{ base: 4, md: 8 }}> 
          <Link href="#about" _hover={{ textDecoration: 'none', color: 'teal.500' }} color={linkColor}>
            <Text fontSize="sm">About me</Text>
          </Link>
          <Link href="#skills" _hover={{ textDecoration: 'none', color: 'teal.500' }} color={linkColor}>
            <Text fontSize="sm">Skills</Text>
          </Link>
          <Link href="#experience" _hover={{ textDecoration: 'none', color: 'teal.500' }} color={linkColor}>
            <Text fontSize="sm">Experience</Text>
          </Link>
          <Link href="#projects" _hover={{ textDecoration: 'none', color: 'teal.500' }} color={linkColor}>
            <Text fontSize="sm">Projects</Text>
          </Link>
          <Link href="#contact" _hover={{ textDecoration: 'none', color: 'teal.500' }} color={linkColor}>
            <Text fontSize="sm">Contact</Text>
          </Link>
        </Flex>

        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost" 
          fontSize="xl"
        />
      </Flex>
    </Box>
  );
}

export default Header;