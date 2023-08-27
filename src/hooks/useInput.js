import { useState } from "react"

export const useInput = (initialState) => {
    const [input, setInput] = useState(initialState)

    const onChange = (e) => {
        const {value, name} = e.target
        setInput({...input, [name]: value})
    }

    const clearInput = () => {
        setInput(initialState)
    }

    return {input, onChange, clearInput}

}