import axios from "axios"
import { useInput } from "../../hooks/useInput"
import { base_url, token_name } from "../../constants/url"
import { goToFeedPage, goToSignupPage } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import LogoLabeddit from "../../assets/home-page.png"
import { Button, ButtonGradient, FormContainer, Input, InputContainer, InputsSpace, LabedditSubTitle, LabedditTitle, LabelInput, LineBetweenButtons, LoginPageContaner, LogoContainer, LogoLabedditStyle } from "./LoginStyle"
import { Loading } from "../../components/Loading/Loading"
import { useContext } from "react"
import { globalContext } from "../../contexts/globalContext"

export const Login = () => {
    const navigate = useNavigate()

    const { input, onChange } = useInput({ email: "", password: "" })
    const { loading, setLoading } = useContext(globalContext)

    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const body = {
                email: input.email,
                password: input.password
            }
            const res = await axios.post(base_url + "/users/login", body)
            window.localStorage.setItem(token_name, res.data.token)
            window.localStorage.setItem("labeddit_nickname", res.data.nickname)
            goToFeedPage(navigate)
            setLoading(false)
        } catch (error) {
            window.alert(error?.response?.data)
            setLoading(false)
        }
    }

    return (
        <LoginPageContaner>
            <LogoContainer>
                <LogoLabedditStyle src={LogoLabeddit} />
                <LabedditTitle>LabEddit</LabedditTitle>
                <LabedditSubTitle>O projeto da rede social da Labenu</LabedditSubTitle>
            </LogoContainer>
            <FormContainer onSubmit={login}>
                <InputContainer>
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
                <ButtonGradient>Continuar</ButtonGradient>
            </FormContainer>
            <LineBetweenButtons></LineBetweenButtons>
            <Button
                onClick={() => goToSignupPage(navigate)}
            >Crie uma conta!</Button>
            {loading && <Loading />}
        </LoginPageContaner>
    )
}
