import { useState, useEffect } from 'react'

import { Link as ScrollLink, Element } from 'react-scroll'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Heading,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  Fade
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import './App.css'
import '@fontsource/dejavu-mono'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import SkillsSection from './sections/SkillsSection'

// import PropagateLoader from 'react-spinners/PropagateLoader'
import FaceSlicing from './assets/face_slicing.gif'


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  },[])


  const LinkItems = [
    { name: 'About' },
    { name: 'Experience' },
    { name: 'Skills' }
  ]

  return (
    <>
    {
      isLoading ? 
        <Flex minH="100vh" alignItems={'center'} justifyContent={'center'}>
          {/* <iframe src="https://giphy.com/embed/xThtapK3c263ooD0Fa" width="398" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sticker-traceloops-xThtapK3c263ooD0Fa">via GIPHY</a></p> */}
          <Image src={FaceSlicing} w='sm'/>
        </Flex>
      :
      <Fade initialScale={0.9} in={!isLoading}>
        <Box 
          minH="100vh" 
          // bg={useColorModeValue('gray.100', 'gray.900')}
        >
          <SidebarContent linkItems={LinkItems} onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
            <DrawerContent>
              <SidebarContent linkItems={LinkItems} onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} pt={{ base: 24, md: 0 }}>
            {/* Content */}
            <Element name="About" className="About" id='About' >
              <AboutSection/>
            </Element>
            <Element name="Experience" className="Experience" id="Experience" >
              <ExperienceSection/>
            </Element>
            <Element name="Skills" className="Skills" id="Skills" >
              <SkillsSection/>
            </Element>
          </Box>
        </Box>
      </Fade>
    }
    </>
  )
}

const SidebarContent = ({ linkItems, onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      // borderRight="1px"
      // borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      py={100}
      {...rest}>
      <Flex h="50%" alignItems="center" p="10" mb="4" justifyContent="center">
        {/* <Text display={{ base: 'none', md: 'block' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
          <Image
            display={{ base: 'none', md: 'flex' }}
            boxSize='100%'
            borderRadius='full'
            objectFit='cover' 
            src="https://media.licdn.com/dms/image/D5603AQGR2TrEs9pUTw/profile-displayphoto-shrink_200_200/0/1682508622986?e=1707350400&v=beta&t=KpydzDEoiwE5hM_iHDe1iGGf-qwD09YgWlsce0TIyvA" 
            alt='Dan Abramov' 
          />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <ScrollLink to={link.name} spy={true} smooth={true} duration={500} >
          <NavItem key={link.name} onClick={onClose}>
            <Heading as='b' size='lg'>{link.name}</Heading>
          </NavItem>
        </ScrollLink>
      ))}
    </Box>
  )
}


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="1"
        mx="4"
        // borderRadius="lg"

        role="group"
        cursor="pointer"
        _hover={{
          bg: 'dark.100',
          color: 'white',
          p: "2",
          transition: "padding 300ms ease"
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      position="fixed"
      width="100%"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  )
}

export default App
