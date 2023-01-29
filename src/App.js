import { ChakraProvider, extendTheme, Text  } from '@chakra-ui/react'
import AppLayout from './layout/AppLayout';
import theme from './theme';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchStudents } from './pages/students-page/slice/studentsSlice'; 
import useFetchStudents from './hooks/useFetchStudents';

const customTheme = extendTheme(theme)

function App() {

 const dispatch = useDispatch()
 const {data} = useFetchStudents();

  useEffect(() => {
    if (data.students){
      if (data.students.length > 0){
        dispatch(fetchStudents({
          payload: data.students
        }))
      }
    }
  }, [dispatch, data])

  return (
    <ChakraProvider theme={customTheme}>
      <AppLayout>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </AppLayout>
    </ChakraProvider >
  );
}

export default App;
