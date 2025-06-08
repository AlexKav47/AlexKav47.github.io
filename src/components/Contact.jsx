import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Badge,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const contactInfo = [
  {
    type: 'PERSONAL',
    email: 'alexkav47@gmail.com',
    colorScheme: 'green',
  },
  {
    type: 'ACADEMIC',
    email: '20098349@setu.ie',
    colorScheme: 'orange',
  },
];

function Contact() {
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const emailTextColor = useColorModeValue('blue.500', 'blue.300');
  const emailHoverColor = useColorModeValue('blue.600', 'blue.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      id="contact"
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
        Contact me
      </Heading>

      <Flex justifyContent="center">
        <Box
          bg={cardBgColor}
          p={8}
          borderRadius="lg"
          boxShadow="md"
          border="1px solid"
          borderColor={borderColor}
          textAlign="center"
          maxW={{ base: 'full', sm: '600px', md: '700px', lg: '800px' }} 
        >
          <Flex
            direction={{ base: 'column', sm: 'row' }} 
            alignItems="center" 
            justifyContent="center" 
            wrap="wrap" 
            gap={10} 
          >
            {contactInfo.map((item, index) => (
              <Flex key={index} direction="column" alignItems="center">
                <Badge
                  variant="subtle"
                  colorScheme={item.colorScheme}
                  borderRadius="md"
                  px={2}
                  py={1}
                  mb={2}
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="sm"
                >
                  {item.type}
                </Badge>
                <Link
                  href={`mailto:${item.email}`}
                  color={emailTextColor}
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'underline', color: emailHoverColor }}
                  isExternal
                  whiteSpace="nowrap"
                >
                  {item.email}
                </Link>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;