/*eslint-disable */
import { useSelector } from "react-redux"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

const ViewStudentsList = () => {

    const listOfStudents = useSelector(state => state.students.listOfStudents)

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Date of Birth</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        listOfStudents.map((student, i) => {
                            return (
                                <Tr key={i}>
                                    <Td>{student.firstName}</Td>
                                    <Td>{student.familyName}</Td>
                                    <Td>{student.dateOfBirth}</Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ViewStudentsList