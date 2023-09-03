import styled from "styled-components";

export const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 80px;
    margin-bottom: 40px;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const InputComment = styled.textarea`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    width: 364px;
    height: 131px;
    max-width: 364px;
    max-height: 131px;
    background-color: #EDEDED;
    border-radius: 12px;
    padding: 10px;
    color:#6F6F6F;
    line-height: 24px;
    border: #6F6F6F;
    font-size: 18px;
`
export const PostButton = styled.button`
    width: 359px;
    height: 47px;
    background: linear-gradient(to right, #FF6489, #F9B24E);
    color: #FFFFFF;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    border-radius: 12px;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    border: 1px solid;
`
export const CountNumbers = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 13px;
`
