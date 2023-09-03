import { useContext, useEffect, useState } from "react"
import { base_url, token_name } from "../../constants/url"
import axios from "axios"
import { globalContext } from "../../contexts/globalContext"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/Coordinator"
import { FeedCard } from "../../components/Feed/FeedCard"
import { FeedPageContainer, InputComment, PostButton } from "./FeedStyle"
import { useInput } from "../../hooks/useInput"
import { FormContainer, LineBetweenButtons } from "../Login/LoginStyle"
import { Loading } from "../../components/Loading/Loading"
import ToastAnimated, {showToast} from "../../components/Toast/Toast"

export const Feed = () => {
    const navigate = useNavigate()
    const { posts, loadingPosts, loading, setLoading, loadingPostComments, comments} = useContext(globalContext)
    const { input, onChange } = useInput({ comment: "" })

    useEffect(() => {
        const token = window.localStorage.getItem(token_name)
        if (!token) {
            goToLoginPage(navigate)
        } else {
            loadingPosts()
            loadingPostComments()
        }
    }, [])

    const addPost = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const body = {
                content: input.comment
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }
            await axios.post(base_url + "/posts", body, config)
            input.comment = ""
            loadingPosts()
            loadingPostComments()
            setLoading(false)
        } catch (error) {
            showToast({type: "error", message: `${error?.response?.data}`})
        }
    }

    const countComments = (id) => {
        return comments?.filter(comment=> comment.post_id === id)
    }

    return (
        <FeedPageContainer>
            <FormContainer onSubmit={addPost}>
                <InputComment
                    id="comment"
                    name="comment"
                    typeof="text"
                    value={input.comment}
                    onChange={onChange}
                    placeholder="Escreva seu post..."
                    required
                />
                <PostButton>Postar</PostButton>
            </FormContainer>
            <LineBetweenButtons></LineBetweenButtons>
            <>{posts?.sort((a,b)=>{
                return new Date((b.createdAt.split(',')[0]).split('/').reverse().join('/')) - new Date((a.createdAt.split(',')[0]).split('/').reverse().join('/'))
            })
            
            .map((post, index) => {
                return <FeedCard
                        key={index}
                        postId={post.id}
                        content={post.content}
                        nickname={post.creator.nickname}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        comment={countComments(post.id)}
                    />

                })
                }</>
            {loading && <Loading />}
            <ToastAnimated/>
        </FeedPageContainer>
    )
}