import { useContext, useEffect } from "react"
import { globalContext } from "../../contexts/globalContext"
import { useParams } from "react-router-dom"
import { base_url, token_name } from "../../constants/url"
import axios from "axios"
import { CommentsByPostId } from "../../components/CommentsByPostId"

export const Comments = () => {
    const {comments, setComments} = useContext(globalContext)
    const {postId} = useParams()
    
    const {posts} = useContext(globalContext)

    const postContent = posts?.filter(post => post.id === postId)

    useEffect(()=>{
        loadingPostComments(postId)
    },[])

    const loadingPostComments = async (id) => {
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            const res = await axios.get(base_url + `/comments/${id}`, config)
            setComments(res.data)
        } catch (error) {
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    }

    return (
        <>
        {postContent?.map((post, index)=>{
            return <p key={index}>{post.content}</p>
        })}
        <textarea/>
        <button>Responder</button>
        <p>Comments</p>
        {comments?.map((comment, index)=>{
            return <CommentsByPostId key={index} commentPostId = {comment}/>
        })}
        </>
     
    )
}