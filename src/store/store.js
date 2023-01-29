import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from '../pages/students-page/slice/studentsSlice'

const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
})

export default store