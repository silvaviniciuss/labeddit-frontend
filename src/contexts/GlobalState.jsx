import { useState } from "react"
import {globalContext} from "./globalContext"
import axios from "axios"
import { base_url, token_name } from "../constants/url"
import { showToast } from "../components/Toast/Toast"

export const GlobalState = ({children}) => {
    
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [editPost, setEditPost] = useState(false)
    const [inputEdit, setInputEdit] = useState()
    const [idToEdit, setIdToEdit] = useState()

    const loadingPosts = async () => {
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }
            const res = await axios.get(base_url + "/posts", config)
            setPosts(res.data)
        } catch (error) {
            showToast({type: "warn", message: `${error?.response?.data}`})
        }
    }
    
    const loadingPostComments = async () => {
        setLoading(true)
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }
            const res = await axios.get(base_url + "/comments", config)
            setComments(res.data)
            setLoading(false)
        } catch (error) {
            showToast({type: "warn", message: `${error?.response?.data}`})
        }
    }
    
    const loadingPostCommentsByPostId = async (postId) => {
        setLoading(true)
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }
            const res = await axios.get(base_url + `/comments/${postId}`, config)
            setComments(res.data)
            setLoading(false)
        } catch (error) {
            showToast({type: "warn", message: `${error?.response?.data}`})
        }
    }

    const context = {
        posts,
        setPosts,
        comments,
        setComments,
        loadingPosts,
        loadingPostComments,
        loading,
        setLoading,
        loadingPostCommentsByPostId,
        editPost,
        setEditPost,
        inputEdit,
        setInputEdit,
        idToEdit,
        setIdToEdit
    }
    
    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}