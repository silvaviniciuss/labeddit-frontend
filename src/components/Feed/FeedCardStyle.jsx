import styled from "styled-components";

export const FeedCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 364px;
    gap: 10px;
    background-color:#FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    padding: 10px;
`
export const Nickname = styled.p`
    height: 16px;
    color: #6F6F6F;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
`
export const Content = styled.p`
    font-size: 18px;
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
`
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 330px;
    height: 28px;
    column-gap: 15px;
`
export const LikesDislikesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 98px;
    background-color:#FBFBFB;
    border: 1px solid #E0E0E0;
    gap: 5px;
    border-radius: 28px;
`
export const LikeDislikeImg = styled.img`
    width: 19px;
    height: 19px;
    cursor: pointer;
`
export const CountCommentsConteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 65px;
    height: 28px;
    background-color:#FBFBFB;
    border: 1px solid #E0E0E0;
    gap: 5px;
    border-radius: 28px;
    cursor: pointer;
`
export const CountCommentsIcon = styled.img`
    width: 20px;
    height: 20px;
`
export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 65px;
    height: 28px;
    background-color:#FBFBFB;
    border: 1px solid #E0E0E0;
    gap: 5px;
    border-radius: 28px;
    cursor: pointer;
`
export const DeleteIcon = styled.img`
    width: 20px;
    height: 20px;
`
export const EditContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 65px;
    height: 28px;
    background-color:#FBFBFB;
    border: 1px solid #E0E0E0;
    gap: 5px;
    border-radius: 28px;
    cursor: pointer;
`
export const EditIcon = styled.img`
    width: 20px;
    height: 20px;
`
