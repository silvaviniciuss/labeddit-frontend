import axios from "axios"
import { base_url, token_name } from "../../constants/url"
import { useInput } from "../../hooks/useInput"
import { ButtonGradient, Input, InputContainer, InputsSpace, LabelInput } from "../Login/LoginStyle"
import { FormSignupContainer, SignupPageContainer, Span, TermsBlackColor, TermsContainer, TermsLabel, TitleText } from "./SignupStyle"
import { goToFeedPage } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { globalContext } from "../../contexts/globalContext"

export const Signup = () => {
    const { input, onChange } = useInput({ nickname: "", email: "", password: "" })
    const [isChecked, setIsChecked] = useState(false)
    const navigate = useNavigate()
    const {setLoading} = useContext(globalContext)
    
    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (isChecked === false) {
                window.alert("Deve ser macado")
            } else {
                const body = {
                    nickname: input.nickname,
                    email: input.email,
                    password: input.password
                }
                const res = await axios.post(base_url + "/users/signup", body)
                window.localStorage.setItem(token_name, res.data.token)
                window.localStorage.setItem("labeddit_nickname", res.data.nickname)
                setLoading(false)
                goToFeedPage(navigate)
            }
        } catch (error) {
            window.alert(error?.response?.data)
        }
    }

    return (
        <SignupPageContainer>
            <TitleText>{`Olá, boas vindas ao LabEddit ;)`}</TitleText>
            <FormSignupContainer onSubmit={signup}>
                <InputContainer>
                    <InputsSpace>
                        <Input
                            id="nickname"
                            name="nickname"
                            type="text"
                            value={input.nickname}
                            onChange={onChange}
                            placeholder=" "
                            autoComplete="off"
                            required
                        />
                        <LabelInput htmlFor="nickname">Apelido</LabelInput>
                    </InputsSpace>
                    <InputsSpace>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={input.email}
                            onChange={onChange}
                            placeholder=" "
                            autoComplete="off"
                            required
                        />
                        <LabelInput htmlFor="email">E-mail</LabelInput>
                    </InputsSpace>
                    <InputsSpace>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={input.password}
                            onChange={onChange}
                            placeholder=" "
                            autoComplete="off"
                            required
                        />
                        <LabelInput htmlFor="password">Senha</LabelInput>
                    </InputsSpace>
                </InputContainer>
                <TermsContainer>
                    <TermsBlackColor>Ao continuar, você concorda com o nosso <Span>Contrato de usuário</Span> e nossa <Span>Política de Privacidade</Span></TermsBlackColor>
                    <div>
                        <input
                            type="checkbox"
                            id="terms"
                            value="terms"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <TermsLabel>Eu concordo em receber emails sobre coisas legais no Labeddit</TermsLabel>
                    </div>
                </TermsContainer>
                <ButtonGradient>Cadastrar</ButtonGradient>
            </FormSignupContainer>
        </SignupPageContainer>
    )
}
