import React, { useState } from 'react'
import {
    Box,
    Heading,
    Image,
    Flex,
    HStack,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { 
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaReact
} from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const projects = [
    { 
        title: "Kanban PHP", 
        description: "A todo Web application tool for individuals or teams, made in PHP Core. This is my project in Integrative Programming and Technologies,  also in Database Management System.", 
        images: [
            "https://github.com/yottaaa/Kanban-PHP/blob/main/kanban_php.PNG?raw=true"
        ] 
    },
    { 
        title: "Backend REST API Ordering system for CNSC cafeteria", 
        description: "Backend Rest API server for CNSC Canteen Ordering System to be used in Mobile and Desktop Application for client's capstone project made in Django and Django Rest Framework, it also has SMS notification for OTP using Twilio API.", 
        images: [
            "https://royeen.vercel.app/static/media/1.aea294ada05bf24a618b.jpg",
            "https://royeen.vercel.app/static/media/2.db9c99efe2ef84b5f6c2.jpg",
            "https://royeen.vercel.app/static/media/4.e55dfc05882038b1be93.jpg"
        ] 
    },
    { 
        title: "euodoo Technologies Website", 
        description: "A company website", 
        images: [
            "https://gitlab.com/rockyou_yotta/euodoo-website/-/raw/main/screenshots/euodoo_website_1.png",
            "https://gitlab.com/rockyou_yotta/euodoo-website/-/raw/main/screenshots/euodoo_website_2.png",
            "https://gitlab.com/rockyou_yotta/euodoo-website/-/raw/main/screenshots/euodoo_website_3.png"
        ] 
    },
    { 
      title: "Attendance System with Calculation of Hours", 
      description: "A attendance system that can be calculated your hours of time-in and time-out with export capabilities. This project is for small and large business that needs for tracking employee's attendance. It is made of ReactJS, Antd Design, and DjangoRestFramework.", 
      images: [
          "https://github.com/yottaaa/euodoo_hris_admin/blob/main/src/assets/attendance_system1.png?raw=true",
          "https://github.com/yottaaa/euodoo_hris_admin/blob/main/src/assets/attendance_system2.png?raw=true",
          "https://github.com/yottaaa/euodoo_hris_admin/blob/main/src/assets/attendance_system3.png?raw=true",
          "https://github.com/yottaaa/euodoo_hris_admin/blob/main/src/assets/attendance_system4.png?raw=true",
          "https://github.com/yottaaa/euodoo_hris_admin/blob/main/src/assets/attendance_system5.png?raw=true",
          "https://github.com/yottaaa/euodoo_hris_admin/blob/main/src/assets/attendance_system6.png?raw=true"
      ] 
  },
];

const SkillsSection = () => {
    const [activeProject,setActiveProject] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box minHeight="100vh" px={{ base: 6, md: 24 }} py="10" mb="14">
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"lg"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{projects[activeProject].title}</DrawerHeader>
                    <DrawerBody>
                        <Text mb={10}>{projects[activeProject].description}</Text>
                        <CarouselDrawer project={projects[activeProject]}/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Heading 
                mb="24" 
                size={{ base: "2xl", md: "4xl" }}
                color="gray.900"
            >Skills</Heading>
            <Box mb={24}>
                <Flex 
                    bg="dark.900" 
                    color={"white"} 
                    alignItems={"center"} 
                    justifyContent={"center"} 
                    w={150}
                    borderRadius={"full"}
                    mb={4}
                >
                    Technologies
                </Flex>
                <HStack spacing='24px'>
                    <FaHtml5 color="gray" size="5%" cursor={'pointer'}/>
                    <FaCss3Alt color="gray" size="5%"  cursor={'pointer'}/>
                    <IoLogoJavascript color="gray" size="5%" cursor={'pointer'} />
                    <FaPython color="gray" size="5%"  cursor={'pointer'}/>
                    <DiDjango color="gray" size="5%"  cursor={'pointer'}/>
                    <FaReact color="gray" size="5%"  cursor={'pointer'}/>
                    <SiSelenium color="gray" size="5%"  cursor={'pointer'}/>
                </HStack>
            </Box>
            <Box>
                <Flex  
                    bg="dark.900" 
                    color={"white"} 
                    alignItems={"center"} 
                    justifyContent={"center"} 
                    w={150}
                    borderRadius={"full"}
                    mb={4}
                >
                    Projects
                </Flex>
                <Carousel 
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                >
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            activeKey={index}
                            setActiveProject={setActiveProject} 
                            project={project} 
                            btnRef={btnRef} 
                            onOpen={onOpen}
                        />
                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}

const ProjectCard = ({ setActiveProject, activeKey, project, btnRef, onOpen }) => {
    return (
        <Box 
            my={2}
            mr={10} 
            height={{ base: 300, md: 300 }} 
            width={{ base: 200, md: 280 }} 
            overflow={'hidden'}
            border='1px' 
            borderColor='gray.200'
            borderRadius='xl'
            boxShadow='md'
            cursor={'pointer'}
            position={'relative'}
            ref={btnRef} 
            onClick={() => {
                setActiveProject(activeKey);
                onOpen();
            }}
        >
            <Image
                src={project.images[0]}
                alt={project.title}
                borderRadius='xl'
                transition="transform .2s"
                height={300} width={300}
                objectFit={'contain'}
                _hover={{
                    transform: "scale(1.2)"
                }}
            />
            <Text 
                fontSize="md" 
                color="dark.900" 
                as="b" 
                position={'absolute'} 
                bottom={4} 
                left={4}
            >
                {project.title}
            </Text>
        </Box>
    )
}

const CarouselDrawer = ({ project }) => {
    const arrowStyles = {
      cursor: "pointer",
      pos: "absolute",
      top: "50%",
      w: "auto",
      mt: "-22px",
      p: "16px",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "0.6s ease",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      _hover: {
        opacity: 0.8,
        bg: "black",
      },
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = project.images.length;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
  
    const setSlide = (slide) => {
      setCurrentSlide(slide);
    };
  
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };
    return (
      <Flex
        w="full"
        // bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex h="400px" w="full" {...carouselStyle}>
            {project.images.map((img, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={img}
                  alt="carousel image"
                //   boxSize="full"
                  backgroundSize="contain"
                />
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    );
  };

export default SkillsSection;