import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        listOfStudents: []
    },
    reducers: {
      fetchStudents(state, action) {
        let newStudentsArr = action.payload;
        return {
            ...state,
            listOfStudents: newStudentsArr
        }
      },
      addStudent(state, action) {
        let newStudentObj = action.payload
        let newStudentsArr = [...state.listOfStudents];
        let newStudent = {
          id: newStudentsArr.length + 1,
          ...newStudentObj
        }
        newStudentsArr.push(newStudent)
        return {
            ...state,
            listOfStudents: newStudentsArr
        }
      }
    },
  })
  
  const { actions, reducer } = studentsSlice
  export const { fetchStudents,  addStudent} = actions
  export default reducer