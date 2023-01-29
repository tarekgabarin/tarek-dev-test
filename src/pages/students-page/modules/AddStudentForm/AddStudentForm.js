/*eslint-disable */
import { useForm } from "react-hook-form";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  // Button,
  VStack,
  Box
} from '@chakra-ui/react'

const AddStudentForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <VStack spacing={2}>


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


      </VStack>

    </form>
  )

}

export default AddStudentForm