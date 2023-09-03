import { useContext, useEffect } from "react"
import { globalContext } from "../../contexts/globalContext"
import { useParams } from "react-router-dom"
import { base_url, token_name } from "../../constants/url"
import axios from "axios"
import { CommentsByPostId } from "../../components/Comments/CommentsByPostId"
import { FeedCard } from "../../components/Feed/FeedCard"
import { CommentPageContainer } from "./CommentsStyle"
import { InputComment } from "../Feed/FeedStyle"
import { useInput } from "../../hooks/useInput"
import { ButtonGradient, FormContainer, LineBetweenButtons } from "../Login/LoginStyle"
import { Loading } from "../../components/Loading/Loading"
import ToastAnimated, { showToast } from "../../components/Toast/Toast"

export const Comments = () => {
    const { posts, loading, setLoading , comments, loadingPostCommentsByPostId} = useContext(globalContext)
    const { postId } = useParams()

    const { input , onChange } = useInput({ answer: "" })

    const postContent = posts?.filter(post => post.id === postId)

    useEffect(()=>{
        loadingPostCommentsByPostId(postId)
    },[])

    const addComment = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const body = {
                content: input.answer
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.post(base_url + `/comments/${postId}`, body, config)
            input.answer = ""
            loadingPostCommentsByPostId(postId)
            setLoading(false)
        } catch (error) {
            showToast({type: "warn", message: `${error?.response?.data}`})
        }
    }   
    
    const countComments = (id) => {
        return comments?.filter(comment=> comment.post_id === id)
    }
    
    return (
        <CommentPageContainer>
            {postContent?.map((post, index) => {
                return <FeedCard
                    key={index}
                    postId={post.id}
                    content={post.content}
                    nickname={post.creator.nickname}
                    likes={post.likes}
                    dislikes={post.dislikes}
                    comment={countComments(post.id)}
                />
            })}
            <FormContainer onSubmit={addComment}>
                <InputComment
                    id="answer"
                    name="answer"
                    typeof="text"
                    value={input.answer}
                    onChange={onChange}
                    placeholder="Adicionar comentário"
                    required
                />
                <ButtonGradient>Responder</ButtonGradient>
            </FormContainer>
            <LineBetweenButtons></LineBetweenButtons>
            {comments?.sort((a, b)=>{
                return new Date((b.createdAt.split(',')[0]).split('/').reverse().join('/')) - new Date((a.createdAt.split(',')[0]).split('/').reverse().join('/'))
            })
            
            .map((comment, index) => {
                return <CommentsByPostId key={index} commentPostId={comment} />
            })}
            {loading && <Loading/>}
            <ToastAnimated/>
        </CommentPageContainer>
    )
}