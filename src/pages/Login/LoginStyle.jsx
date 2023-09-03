import styled from "styled-components";

export const LoginPageContaner = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
`
export const LogoLabedditStyle = styled.img`
    width: 84px;
    height: 84px;
`
export const LabedditTitle = styled.h1`
    font-weight: 700;
    size: 36px;
    line-height: 47px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #373737;
`
export const LabedditSubTitle = styled.h2`
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    width: 378px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #000000;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    background-color: white;
    color: #373737;
`

export const InputsSpace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 30px;
    row-gap: 10px;
`
export const Input = styled.input`
    width: 363px;
    height: 60px;
    size: 16px;
    line-height: 22px;
    border:1px solid #D5D8DE;
    background-color: #FFFFFF;
    padding-top: 10px;
    padding-left: 12px;
    font-size: 16px;
    border-radius: 5px;
    :focus + label, :not(:placeholder-shown) + label {
        transition: .8s;
        transform: translateY(-.9em) scale(0.8);
    }
    color: black;
`
export const LabelInput = styled.label`
    position: absolute;
    left: 15px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 300;
    pointer-events: none;
    transform-origin: 0 0;
    color:#323941;
`

export const ButtonGradient = styled.button`
    width: 365px;
    height: 51px;
    background: linear-gradient(to right, #FF6489, #F9B24E);
    color: #FFFFFF;
    border: 1px solid;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    border-radius: 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`

export const Button = styled.button`
    width: 365px;
    height: 51px;
    background-color: white;
    color: #FE7E02;
    border: 1px solid #FE7E02;
    border-radius: 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`
export const LineBetweenButtons = styled.hr`
    background: linear-gradient(to right, #FF6489, #F9B24E);
    width: 364px;
    border: 1px;
    height: 1px;
    margin-bottom: 10px;
    margin-top: 10px;
`