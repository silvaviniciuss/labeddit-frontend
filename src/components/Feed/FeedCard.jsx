import { useContext, useEffect, useState } from "react"
import { base_url, token_name } from "../../constants/url"
import axios from "axios"
import { Content, DeleteContainer, DeleteIcon, EditContainer, EditIcon, CountCommentsConteiner, CountCommentsIcon, FeedCardContainer, FooterContainer, LikeDislikeImg, LikesDislikesContainer, Nickname } from "./FeedCardStyle"
import CountCommentImg from "../../assets/comment.png"
import { CountNumbers } from "../../pages/Feed/FeedStyle"
import { useLocation, useNavigate } from "react-router-dom"
import { goToCommentPage, goToFeedPage } from "../../routes/Coordinator"
import { getLikeImg } from "../../Utils/getLikeImg"
import { getDislikeImg } from "../../Utils/getDislikeImg"
import { globalContext } from "../../contexts/globalContext"
import DeleteImg from "../../assets/delete.png"
import EditImg from "../../assets/edit.png"
import { EditCard } from "../EditCard/EditCard"

export const FeedCard = ({ postId, content, nickname, likes, dislikes, comment }) => {
    const navigate = useNavigate()
    const locate = useLocation()

    const [likeButton, setLikeButton] = useState('none')
    const { loadingPosts, loadingPostComments, setLoading, editPost, setEditPost, setInputEdit, setIdToEdit } = useContext(globalContext)

    const labedditNickname = window.localStorage.getItem("labeddit_nickname")

    useEffect(() => {
        loadingLikeDislikes(postId)
    }, [])

    const showButton = () => {
        if (locate.pathname === '/feed') {
            return nickname === labedditNickname &&
                <>
                    <EditContainer
                        onClick={() => {
                            setInputEdit(content)
                            setIdToEdit(postId)
                            setEditPost(true)
                        }}
                    >
                        <EditIcon
                            src={EditImg}
                        />
                    </EditContainer>
                    <DeleteContainer
                        onClick={deletePost}
                    >
                        <DeleteIcon src={DeleteImg} />
                    </DeleteContainer>
                </>
        } else {
            <></>
        }
    }

    const loadingLikeDislikes = async (postId) => {
        setLoading(true)
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            const res = await axios.get(base_url + `/posts/${postId}/like`, config)
            setLikeButton(res.data.like)
            setLoading(false)
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    const addLike = async (e) => {
        e.preventDefault()
        try {
            const body = {
                like: true
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.put(base_url + `/posts/${postId}/like`, body, config)

            loadingLikeDislikes(postId)
            loadingPosts()
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    const addDislike = async (e) => {
        e.preventDefault()
        try {
            const body = {
                like: false
            }
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.put(base_url + `/posts/${postId}/like`, body, config)

            loadingLikeDislikes(postId)
            loadingPosts()

        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    const deletePost = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const config = {
                headers: {
                    Authorization: window.localStorage.getItem(token_name)
                }
            }

            await axios.delete(base_url + `/posts/${postId}`, config)
            loadingPosts()
            loadingPostComments()
            setLoading(false)
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }


    return (
        <FeedCardContainer>
            <Nickname>Enviado por: {nickname}</Nickname>
            <Content>{content}</Content>
            <FooterContainer>
                <div style={{ display: "flex", columnGap: "10px" }}>
                    <LikesDislikesContainer>
                        <LikeDislikeImg
                            onClick={addLike}
                            src={getLikeImg(likeButton)}
                        />
                        <CountNumbers>{likes - dislikes}</CountNumbers>
                        <LikeDislikeImg
                            onClick={addDislike}
                            src={getDislikeImg(likeButton)}
                        />
                    </LikesDislikesContainer>
                    <CountCommentsConteiner
                        onClick={() => {
                            goToCommentPage(navigate, postId)
                        }}
                    >
                        <CountCommentsIcon src={CountCommentImg} />
                        <CountNumbers>{comment.length}</CountNumbers>
                    </CountCommentsConteiner>
                </div>

                <div style={{ display: "flex", columnGap: "10px" }}>
                    {showButton()}
                </div>
                {editPost && <EditCard />}
            </FooterContainer>
        </FeedCardContainer>
    )
}