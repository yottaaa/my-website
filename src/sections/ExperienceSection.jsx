import {
    Box,
    Heading,
    Divider,
    Text

} from '@chakra-ui/react'

const steps = [
    { 
        title: "Web and App Developer", 
        company: "euodoo Technologies, Inc.",
        date: "March 2022 to June 2022",
        description: [
            "• Managed a web app for deployment (Git for Version Control and Heroku for Hosting)",
            "• Data Encoding (GPS Trip Report)",
            "• Working in different admin tasks.",
            "• Develop Attendance System (Django, ReactJS)",
            "• Develop company website (ReactJS)"
        ] 
    },
    { 
        title: 'Automation Consultant', 
        company: "Third Pillar Business Applications, Inc.",
        date: "July 2022 to Present",
        description: [
            "• Worked in the integration team to provide various automation solutions for Business processes.",
            "• Applied knowledge in REST APIs, Data Manipulation, Data Cleaning, Databases, and Technical Solutions.",
            "• Participate on Data Science process such as data collection, training model, and testing model.",
            "• Participating on project preparation such as documentation and planning.",
            "• Tools used: Automation Hero (Cloud RPA/IPA platform) and JavaScript (Data Manipulation)."
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
        <Box minHeight="100vh" px={{ base: 6, md: 24 }} py="10" mb="24">
            <Heading 
                mb="12" 
                size={{ base: "2xl", md: "4xl" }}
                color="gray.900"
            >Experience</Heading>
                {steps.map((step, index) => (
                    <Box my={8}>
                        <Text as={'b'} fontSize={{ base: "lg", md: "xl" }}>{step.title}</Text>
                        <Text>{step.company}</Text>
                        <Text my="4" fontSize="sm" color={'gray'}>{step.date
                        }</Text>
                        {step.description.map((desc, index) => (
                            <Text>
                                {desc}
                            </Text>
                        ))}
                        <Divider my={4}/>
                    </Box>
                ))}
        </Box>
    )
}

export default ExperienceSection;