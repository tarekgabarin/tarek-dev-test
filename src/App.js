import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AppLayout from './layout/AppLayout';
import theme from './theme';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchStudents } from './pages/students-page/slice/studentsSlice';
import useFetchStudents from './hooks/useFetchStudents';
import HomePage from './pages/home-page/HomePage';
import StudentsPage from './pages/students-page/StudentPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const customTheme = extendTheme(theme)

function App() {

  const dispatch = useDispatch()
  const { data } = useFetchStudents();

  useEffect(() => {
    if (data.students) {
      if (data.students.length > 0) {
        dispatch(fetchStudents(data.students))
      }
    }
  }, [dispatch, data])

  return (
    <ChakraProvider theme={customTheme}>
      <ToastContainer />
      <Router>
        <AppLayout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentsPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </ChakraProvider >
  );
}

export default App;
