import styled from "styled-components";

export const EditCardBackground = styled.div`
    position: fixed;
    background-color: #ffffff36;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
`

export const FormContainerEdit = styled.form`
    position: absolute;
    top: 30%;
    left: 34%;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    background-color: #ffffff32;
    color: #373737;
    @media screen and (max-device-width : 415px){
        left: 6%;
}
`

export const EditCardBack = styled.div`
    position: absolute;
    right: 0;
    top: -20%;
    z-index: 999;
    width: 35px;
    height: 35px;
    cursor: pointer;
`
export const EditCardX = styled.span`
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