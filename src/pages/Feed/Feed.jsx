import { useContext, useEffect } from "react"
import { base_url, token_name } from "../../constants/url"
import axios from "axios"
import { globalContext } from "../../contexts/globalContext"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/Coordinator"
import { CountComments } from "../../components/Comments/CountComments"

export const Feed = () => {
    const navigate = useNavigate()
    const { posts, setPosts } = useContext(globalContext)

    useEffect(() => {
        const token = window.localStorage.getItem(token_name)
        if (!token) {
            goToLoginPage(navigate)
        } else {
            loadingPosts()
        }
    }, [])

    const loadingPosts = async () => {
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            const res = await axios.get(base_url + "/posts", config)
            
        } catch (error) {
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    }

    return (
        <main
            style={{ display: "flex", flexDirection: "column" }}
        >
            <textarea />
            <button>Postar</button>
            <>{posts?.map((post, index)=>{
               return <div key={index} style={{display:"flex", flexDirection:"column"}}>
                <p>Enviado por: {post.creator.nickname}</p>
                <p>{post.content}</p>
                <p>{post.likes}</p>
                <CountComments postId = {post.id}/>
               </div>
            })}</>
        </main>
    )
}