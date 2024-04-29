// Personal website for Csizmazia Zoltán (csizo)
import { Box, Container, Heading, Text, Image, Link, VStack, Button, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} as="article">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1633556416720-b5374b99f47a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDc2l6bWF6aWElMjBab2x0JUMzJUExbnxlbnwwfHx8fDE3MTQ0MTc5MTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Csizmazia Zoltán" mb={4} />
          <Heading as="h1" size="xl">
            Csizmazia Zoltán
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Software Developer | Tech Enthusiast
          </Text>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            About Me
          </Heading>
          <Text fontSize="md" mt={4}>
            Hello! I'm Zoltán, a passionate software developer with a keen interest in open-source projects and modern web technologies. I specialize in creating dynamic and user-friendly web applications. I'm always eager to learn new skills and take on challenging projects.
          </Text>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          <VStack spacing={4} align="start" mt={4}>
            <Link href="https://github.com/csizo/project1" isExternal>
              <Button leftIcon={<Icon as={FaGithub} />} colorScheme="teal" variant="solid">
                Project One
              </Button>
            </Link>
            <Link href="https://github.com/csizo/project2" isExternal>
              <Button leftIcon={<Icon as={FaGithub} />} colorScheme="teal" variant="solid">
                Project Two
              </Button>
            </Link>
            <Link href="https://chat.openai.com/g/g-McHQntlYS-magyar-mano" isExternal>
              <Button leftIcon={<Icon as={FaGithub} />} colorScheme="teal" variant="solid">
                Magyar Manó GPT
              </Button>
            </Link>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Contact
          </Heading>
          <VStack spacing={4} align="start" mt={4}>
            <Link href="mailto:csizo@example.com" isExternal>
              <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="blue" variant="solid">
                Email Me
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/csizo" isExternal>
              <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="solid">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/csizo" isExternal>
              <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="solid">
                GitHub
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
