import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useColorMode, 
  Link,
  Icon,
} from '@chakra-ui/react';

import { FaLinkedinIn, FaHeart, FaSun, FaMoon } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md'; 
import { IoIosArrowUp } from 'react-icons/io'; 

function Footer() {
  const footerBg = useColorModeValue('whiteAlpha.800', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'whiteAlpha.700');
  const iconColor = useColorModeValue('gray.700', 'whiteAlpha.800');
  const iconHoverBg = useColorModeValue('gray.200', 'gray.600');

  const { colorMode, toggleColorMode } = useColorMode();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      as="footer"
      bg={footerBg}
      py={4}
      px={{ base: 4, md: 8, lg: 16 }}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      position="relative"
      zIndex="overlay"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontSize="sm" color={textColor} mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} Alex Kavanagh - made with <Icon as={FaHeart} color="red.500" mx={1} /> using ReactJS
        </Text>

        <Flex gap={2}>
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/alex--kavanagh/" 
            isExternal
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            variant="ghost"
            color={iconColor}
            _hover={{ bg: iconHoverBg }}
            size="md"
            borderRadius="full"
          />

          <IconButton
            as={Link}
            href="mailto:alexkav47@gmail.com" 
            aria-label="Email"
            icon={<MdEmail />}
            variant="ghost"
            color={iconColor}
            _hover={{ bg: iconHoverBg }}
            size="md"
            borderRadius="full"
          />
          <IconButton
            aria-label="Scroll to top"
            icon={<IoIosArrowUp />}
            onClick={scrollToTop}
            variant="ghost"
            color={iconColor}
            _hover={{ bg: iconHoverBg }}
            size="md"
            borderRadius="full"
          />
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} 
            onClick={toggleColorMode} 
            variant="solid"
            colorScheme="teal" 
            color={useColorModeValue('white', 'gray.800')} 
            size="md"
            borderRadius="full"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;