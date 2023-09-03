import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: relative;
    background-color: #EDEDED;
    color: #4088CB;
    height: 50px;
    width: 100vw;
`
export const LogoLabeddit = styled.img`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 50%;
`
export const HeaderText = styled.p`
    font-family: 'Noto Sans';
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
    text-align: center;
    color: #4088CB;
    position: absolute;
    right: 5%;
    width: 63px;
    cursor: pointer;
`
export const HeaderBack = styled.div`
    position: absolute;
    left: 6%;
    top: 20%;
    z-index: 999;
    width: 35px;
    height: 35px;
    cursor: pointer;
`
export const HeaderX = styled.span`
    display: block;
    width: 35px;
    height: 2px;
    margin-bottom: 10px;
    background-color: #A3A3A3;
    border-radius: 3px;
    :nth-child(1) {
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1);
    }
    :nth-child(2) {
        opacity: 0;
    }
    :nth-child(3) {
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1);
    }
`

