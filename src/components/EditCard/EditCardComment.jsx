import { InputComment, PostButton } from "../../pages/Feed/FeedStyle"
import { EditCardBack, EditCardBackground, EditCardX, FormContainerEdit } from "./EditCardStyle"
import { useInput } from "../../hooks/useInput"
import { useContext } from "react"
import { globalContext } from "../../contexts/globalContext"
import { base_url, token_name } from "../../constants/url"
import axios from "axios"
import { useParams } from "react-router-dom"

export const EditCardComment = () => {

    const { 
        inputEdit, 
        setEditPost, 
        setLoading, 
        loadingPostCommentsByPostId,
        idToEdit
    } = useContext(globalContext)
    const { input, onChange } = useInput({ content: inputEdit })
    const {postId} = useParams()

    const savePost = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const body = {
                content: input.content
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }
            await axios.put(base_url + `/comments/${idToEdit}`, body, config)
            
            loadingPostCommentsByPostId(postId)
            setLoading(false)
            setEditPost(false)
            
        } catch (error) {
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    }

    return (
        <EditCardBackground>
            <FormContainerEdit onSubmit={savePost}>
                <EditCardBack onClick={() => setEditPost(false)}>
                    <EditCardX></EditCardX>
                    <EditCardX></EditCardX>
                    <EditCardX></EditCardX>
                </EditCardBack>
                <InputComment
                    id="content"
                    name="content"
                    value={input.content}
                    onChange={onChange}
                />
                <PostButton>Salvar</PostButton>
            </FormContainerEdit>
        </EditCardBackground>
    )
}