import { useState } from 'react'

const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)
    // Update form dynamically using the name
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    return [formValues, handleChange]
}

export default useForm