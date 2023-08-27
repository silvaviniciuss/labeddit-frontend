import axios from "axios"
import { useEffect, useState } from "react"
import { base_url, token_name } from "../../constants/url"
import { goToCommentPage } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"

export const CountComments = ({postId}) => {
    const navigate = useNavigate()

    const [countComment, setCountComment] = useState([])
   
    useEffect(()=>{
        loadingPostComments(postId)
    },[])


    const loadingPostComments = async (postId) => {
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            const res = await axios.get(base_url + `/comments/${postId}`, config)
            setCountComment(res.data)
            
        } catch (error) {
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    }
    
    return(
        <p
        onClick={()=> goToCommentPage(navigate, postId)}
        >{countComment.length === 0 ?
        0 : countComment.length
        }</p>
    )
}