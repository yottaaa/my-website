import {useState, useCallback, useEffect} from 'react'
import {
    Flex,
    Spacer,
    Box,
    Heading,
    Text,
    Link 
} from '@chakra-ui/react'
import { 
  FaLinkedin,
  FaGithub,
  FaFacebook 
} from "react-icons/fa";

const greet = [
  'Hello', 'Hola', 'Kamusta', '안녕하세요', 'こんにちは', 'Bonjour'
]

const AboutSection = () => {
  const [newGreet, setNewGreet] = useState("Hello");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * greet.length);
      setNewGreet(greet[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 5000);
      return () => clearInterval(intervalID);
  }, [shuffle])

    return (
      <Flex direction="column" minHeight="100vh" px={{ base: 6, md: 24 }} py={150}>
        <Box>
          <Heading 
            my={{ base: "2", md: "2" }} 
            size={{ base: "2xl", md: "4xl" }}
            color="gray.900"
          >{newGreet}, I'm Erick!</Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} color='gray'>Python Developer | Web and App Developer | Automation Consultant</Text>
        </Box>
        <Spacer/>
        <Box>
          <Text fontSize={{ base: "sm", md: "md" }}>Dedicated and passionate person who loves to learn about technology. My goal is to be a successful IT professional specializing Software Engineering and Data Science. Also, I would like to share my skills and knowledge to everyone.</Text>
        </Box>
        <Spacer/>
        <Flex>
          <Link href='https://www.linkedin.com/in/erick-agrade-bautista/' isExternal>
            <Flex 
              borderRadius="full" 
              bg="dark.900" 
              width={50} 
              height={50} 
              alignItems="center" 
              justifyContent="center" 
              mr={5} 
              transition="width 0.5s ease-in-out"
              _hover={{
                width: 20
              }}
            >
              <FaLinkedin color="white" size="50%"/>
            </Flex>
          </Link>
          
          <Link href='https://github.com/yottaaa' isExternal>
            <Flex 
              borderRadius="full" 
              bg="dark.900" width={50} 
              height={50} 
              alignItems="center" 
              justifyContent="center"  
              mr={5} 
              transition="width 0.5s ease-in-out"
              _hover={{
                width: 20
              }}
            >
              <FaGithub color="white" size="50%" />
            </Flex>
          </Link>

          <Link href='https://www.facebook.com/yottiepatotie.uk/' isExternal>
            <Flex 
              borderRadius="full" 
              bg="dark.900" width={50} 
              height={50} 
              alignItems="center" 
              justifyContent="center"  
              mr={5}
              transition="width 0.5s ease-in-out"
              _hover={{
                width: 20
              }}
            >
              <FaFacebook color="white" size="50%" />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    )
} 

export default AboutSection