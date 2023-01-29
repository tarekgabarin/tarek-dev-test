/*eslint-disable */
import { useForm } from "react-hook-form";

import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'

const AddStudentForm = () => {
    
    const { 
        register, 
        handleSubmit,
        formState: {errors, isSubmitting}
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

        </form>
    )

}

export default AddStudentForm