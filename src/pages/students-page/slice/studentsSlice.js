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
        let newStudentsArr = state.listOfStudents;
        newStudentsArr.push(newStudentObj)
        return {
            ...state,
            listOfStudents: newStudentsArr
        }
      }
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = studentsSlice
  // Extract and export each action creator by name
  export const { fetchStudents,  addStudent} = actions
  // Export the reducer, either as a default or named export
  export default reducer