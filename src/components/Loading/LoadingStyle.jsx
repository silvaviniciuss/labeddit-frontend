import styled from "styled-components";

export const LoadingStyle = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
`
export const LoadingText = styled.div`
    position: absolute;
    top: 47%;
    left: 45%;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-left-color:#FE7E02 ;
    border-top-color: #45525B;
    border-right-color:#A8BBC6;
    border-bottom-color:#F9B24E;
    height: 50px;
    width: 50px;
    animation: is-rotating 0.3s infinite;
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
    @media screen and (min-device-width : 1000){
        left: 20%;
    }

`
