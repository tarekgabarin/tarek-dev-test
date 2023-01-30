import AddStudentForm from "./modules/AddStudentForm/AddStudentForm"
import ViewStudentsList from "./modules/ViewStudentsList/ViewStudentsList"

import {
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const StudentsPage = () => {
    return (
        <div>
            <Text mb={2} fontSize='5xl'>My Students</Text>
            <Accordion allowMultiple={true}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Add Student
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <AddStudentForm />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                My Students
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <ViewStudentsList />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </div>
    )

}

export default StudentsPage