import { Content, DeleteContainer, DeleteIcon, EditContainer, EditIcon, FeedCardContainer, FooterContainer, LikeDislikeImg, LikesDislikesContainer, Nickname } from "../Feed/FeedCardStyle"
import { CountNumbers } from "../../pages/Feed/FeedStyle"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { base_url, token_name } from "../../constants/url"
import { getDislikeImg } from "../../Utils/getDislikeImg"
import { globalContext } from "../../contexts/globalContext"
import { getLikeImg } from "../../Utils/getLikeImg"
import { useParams } from "react-router-dom"
import DeleteImg from "../../assets/delete.png"
import EditImg from "../../assets/edit.png"
import { EditCardComment } from "../EditCard/EditCardComment"

export const CommentsByPostId = ({ commentPostId }) => {
    const [likeCommentButton, setLikeCommentButton] = useState('none')
    const { postId } = useParams()
    const { loadingPostCommentsByPostId, setLoading, idToDelete, setIdToDelete, editPost, setEditPost, setInputEdit, setIdToEdit } = useContext(globalContext)
    const labedditNickname = window.localStorage.getItem("labeddit_nickname")

    useEffect(() => {
        loadingPostCommentsByPostId(postId)
        loadingLikeDislikeComment(commentPostId.id)
    }, [])


    const loadingLikeDislikeComment = async (commentPostId) => {
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }
            const res = await axios.get(base_url + `/comments/${commentPostId}/like`, config)
            setLikeCommentButton(res.data.like)
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    const addLikeComment = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const body = {
                like: true
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.put(base_url + `/comments/${commentPostId.id}/like`, body, config)

            loadingPostCommentsByPostId(postId)
            loadingLikeDislikeComment(commentPostId.id)
            setLoading(false)
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    const addDislikeComment = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const body = {
                like: false
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.put(base_url + `/comments/${commentPostId.id}/like`, body, config)

            loadingPostCommentsByPostId(postId)
            loadingLikeDislikeComment(commentPostId.id)
            setLoading(false)
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    const deleteComment = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.delete(base_url + `/comments/${commentPostId.id}`, config)
            loadingPostCommentsByPostId(postId)
            setLoading(false)
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    return (
        <FeedCardContainer>
            <Nickname>Enviado por: {commentPostId.creator.nickname}</Nickname>
            <Content>{commentPostId.content}</Content>
            <FooterContainer>
                <LikesDislikesContainer>
                    <LikeDislikeImg
                        onClick={addLikeComment}
                        src={getLikeImg(likeCommentButton)}
                    />
                    <CountNumbers>{commentPostId.likes - commentPostId.dislikes}</CountNumbers>
                    <LikeDislikeImg
                        onClick={addDislikeComment}
                        src={getDislikeImg(likeCommentButton)}
                    />
                </LikesDislikesContainer>
                <div style={{ display: "flex", columnGap: "10px" }}>
                    {
                        commentPostId.creator.nickname === labedditNickname &&
                        <>
                            <EditContainer
                                onClick={() => {
                                    setInputEdit(commentPostId.content)
                                    setIdToEdit(commentPostId.id)
                                    setEditPost(true)
                                }}
                            >
                                <EditIcon
                                    src={EditImg}
                                />
                            </EditContainer>
                            <DeleteContainer
                                onClick={deleteComment}
                            >
                                <DeleteIcon src={DeleteImg} />
                            </DeleteContainer>
                        </>
                    }
                </div>
            </FooterContainer>
            {editPost && <EditCardComment />}
        </FeedCardContainer>
    )
}
