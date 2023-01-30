/*eslint-disable */
import { useSelector } from "react-redux"

const ViewStudentsList = () => {

    const listOfStudents = useSelector(state => state.students.listOfStudents)

    return (
        <div>
            Students List
        </div>
    )
}

export default ViewStudentsList