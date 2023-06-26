import React, { useState } from 'react'


export function useForm(initialFValues: any, validateOnChange = false, validate: (arg0: { [x: number]: any; }) => void) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState(initialFValues);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({email: "", description: "", unitName: "",fullName: "", studentAddress: ""})
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}


export function Form(props: { [x: string]: any; children: any; }) {

    const { children, ...other } = props;
    return (
        <form  autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}