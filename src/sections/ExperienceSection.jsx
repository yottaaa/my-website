import {
    Box,
    Heading,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Text,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'

const steps = [
    { 
        title: "Web and App Developer", 
        company: "euodoo Technologies, Inc.",
        date: "March 2022 to June 2022",
        description: [
            "Managed a web app for deployment (Git for Version Control and Heroku for Hosting)",
            "Data Encoding (GPS Trip Report)",
            "Working in different admin tasks.",
            "Develop Attendance System (Django, ReactJS)",
            "Develop company website (ReactJS)"
        ] 
    },
    { 
        title: 'Automation Consultant', 
        company: "Third Pillar Business Applications, Inc.",
        date: "July 2022 to Present",
        description: [
            "Worked in the integration team to provide various automation solutions for Business processes.",
            "Applied knowledge in REST APIs, Data Manipulation, Data Cleaning, Databases, and Technical Solutions.",
            "Participate on Data Science process such as data collection, training model, and testing model.",
            "Participating on project preparation such as documentation and planning.",
            "Tools used: Automation Hero (Cloud RPA/IPA platform) and JavaScript (Data Manipulation)."
        ] 
    }
]

const ExperienceSection = () => {

    // const { activeStep } = useSteps(
    //     {
    //         index: 2,
    //         count: steps.length,
    //     }
    // )

    return (
        <Box minHeight="100vh" px="24" py="10" mb="24">
            <Heading 
                mb="12" 
                size="4xl" 
                color="gray.900"
            >Experience</Heading>
            <Stepper 
                size='md'
                index={3}
                orientation='vertical' 
                height='400px' 
                gap='0'
            >
                {steps.map((step, index) => (
                    <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                        complete={""}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box ml="6" flexShrink='0'>
                        <StepTitle>
                            <Text as={'b'} fontSize={"xl"}>{step.title}</Text>
                            <Text>{step.company}</Text>
                            <Text my="4" fontSize="sm" color={'gray'}>{step.date
                            }</Text>
                        </StepTitle>
                        <StepDescription mb="16">
                            <UnorderedList>
                                {step.description.map((desc, index) => (
                                    <ListItem key={index}>
                                        {desc}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </StepDescription>
                    </Box>

                    <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default ExperienceSection;