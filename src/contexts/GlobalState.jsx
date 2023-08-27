import { useState } from "react"
import {globalContext} from "./globalContext"

export const GlobalState = ({children}) => {
    
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const context = {
        posts,
        setPosts,
        comments,
        setComments
    }
    
    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}