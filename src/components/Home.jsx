import React from 'react';
import { Heading, Text, Flex, Button, Stack, IconButton, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdArrowRight, MdKeyboardArrowDown } from 'react-icons/md'; 

function Home() {
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const arrowColorScheme = useColorModeValue('lightblue', 'lightblue');
  const buttonColorScheme = useColorModeValue('cyan', 'cyan'); 

  const [isUnderscoreVisible, setUnderscoreVisible] = React.useState(true);
  const [arrowVisibility, setArrowVisibility] = React.useState([false, false, false]); 

  React.useEffect(() => {
    const underscoreIntervalId = setInterval(() => {
      setUnderscoreVisible((prev) => !prev);
    }, 500);

    let currentArrow = 0;
    const arrowIntervalId = setInterval(() => {
      setArrowVisibility((prev) => {
        const newVisibility = [false, false, false];
        newVisibility[currentArrow] = true; 
        return newVisibility;
      });
      currentArrow = (currentArrow + 1) % 3; 
    }, 400); 

    return () => {
      clearInterval(underscoreIntervalId);
      clearInterval(arrowIntervalId);
    };
  }, []);

  return (
    <Flex
      minH="calc(100vh - 80px)"
      align="center"
      justify="center"
      direction="column"
      px={{ base: 4, md: 8 }}
      textAlign="center"
      backgroundRepeat="repeat"
      backgroundAttachment="fixed"
      position="relative"
      overflow="hidden"
      _after={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 'clamp(150px, 30vw, 400px)',
        height: 'clamp(150px, 30vw, 400px)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Heading
        as="h1"
        fontSize={{ base: '4xl', md: '6xl', lg: '1xl' }}
        fontWeight="normal"
        letterSpacing="tight"
        lineHeight="shorter"
        mb={4}
        color={textColor}
        position="relative"
        zIndex={1}
      >
        Alex Kavanagh
        <Text as="span" opacity={isUnderscoreVisible ? 1 : 0} transition="opacity 0.1s ease-in-out">
          _
        </Text>
      </Heading>

      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        fontWeight="bold"
        mb={2}
        color={subTextColor}
        position="relative"
        zIndex={1}
      >
        IE
      </Text>

      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="semibold"
        mb={6}
        color={subTextColor}
        position="relative"
        zIndex={1}
      >
        Information Technology Management @ South East Technological University '25
      </Text>

      <Stack direction="row" spacing={4} mb={8} position="relative" zIndex={1}>
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          size="lg"
          variant="ghost"
          colorScheme="gray"
          _hover={{ color: 'teal.500' }}
          onClick={() => window.open('https://www.linkedin.com/in/alex--kavanagh/', '_blank')}
        />
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          size="lg"
          variant="ghost"
          colorScheme="gray"
          _hover={{ color: 'teal.500' }}
          onClick={() => window.open('https://github.com/AlexKav47', '_blank')}
        />
        <IconButton
          aria-label="Email"
          icon={<FaEnvelope />}
          size="lg"
          variant="ghost"
          colorScheme="gray"
          _hover={{ color: 'teal.500' }}
          onClick={() => (window.location.href = 'mailto:alexkav47@gmail.com')}
        />
      </Stack>

      <Button
        rightIcon={<MdArrowRight />}
        colorScheme={buttonColorScheme}
        size="sm"
        variant="outline"
        px={8}
        py={6}
        borderRadius="full"
        shadow="md"
        position="relative"
        zIndex={1}
        _hover={{
          shadow: 'lg',
          bg: useColorModeValue(`${buttonColorScheme}.50`, `${buttonColorScheme}.900`),
        }}
        onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
      >
        Resume
      </Button>

      <Flex direction="column" mt={8} position="relative" zIndex={1}>
        {[0, 1, 2].map((i) => (
          <Icon
            key={i}
            as={MdKeyboardArrowDown}
            boxSize={{ base: 10, md: 12 }}
            color={arrowColorScheme}
            opacity={arrowVisibility[i] ? 1 : 0}
            transition="opacity 0.3s ease-in-out" 
            mb={i < 2 ? -2 : 0} 
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default Home;