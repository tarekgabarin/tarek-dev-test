import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { addStudent } from "../../slice/studentsSlice";
import { toast } from 'react-toastify';

const AddStudentForm = () => {

  const dispatch = useDispatch()

  function getMinDate(){
    var minYear = new Date().getFullYear() - 10;
    return `01/01/${minYear}`
  }

  const [date, setDate] = useState(new Date(getMinDate()));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {

        var studentData = {
          familyName: values.familyName,
          firstName: values.firstName,
          dateOfBirth: date.toLocaleDateString()
        }

        resolve(studentData)
      }, 3000)
    }).then(formData => {
      dispatch(addStudent(formData))
      toast.success("Added Student!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <VStack spacing={7}>


        <FormControl isInvalid={errors.firstName}>
          <FormLabel htmlFor='firstName'>First name</FormLabel>
          <Input
            id='firstName'
            placeholder='name'
            {...register('firstName', {
              required: 'This is required'
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>



        <FormControl isInvalid={errors.familyName}>
          <FormLabel htmlFor='familyName'>Last name</FormLabel>
          <Input
            id='familyName'
            placeholder='name'
            {...register('familyName', {
              required: 'This is required'
            })}
          />
          <FormErrorMessage>
            {errors.familyName && errors.familyName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='dateOfBirth'>Date of Birth</FormLabel>

          <SingleDatepicker
            maxDate={new Date(getMinDate())}
            name="dateOfBirth"
            date={date}
            onDateChange={setDate}
          />

        </FormControl>

        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Submit
        </Button>

      </VStack>

    </form>
  )

}

export default AddStudentForm