import { useLocation, useNavigate } from "react-router-dom"
import LogoLabedditImg from "../../assets/home-page.png"
import { HeaderBack, HeaderContainer, HeaderText, HeaderX, LogoLabeddit } from "./HeaderStyle"
import { token_name } from "../../constants/url"
import { goToFeedPage, goToLoginPage } from "../../routes/Coordinator"
import { useContext } from "react"
import { globalContext } from "../../contexts/globalContext"

export const Header = () => {
    const locate = useLocation()
    const navigate = useNavigate()
    const {loadingPostComments} = useContext(globalContext)

    const showHeader = () => {
        if (locate.pathname === '/') {
            return <></>
        } else if (locate.pathname.includes("/signup")) {
            return <HeaderContainer>
                <LogoLabeddit src={LogoLabedditImg} />
                <HeaderText
                    onClick={() => goToLoginPage(navigate)}
                >Entrar</HeaderText>
            </HeaderContainer>
        } else if (locate.pathname === '/feed') {
            return <HeaderContainer>
                <LogoLabeddit src={LogoLabedditImg} />
                <HeaderText
                    onClick={() => {
                        window.localStorage.removeItem(token_name)
                        window.localStorage.removeItem("labeddit_nickname")
                        goToLoginPage(navigate)
                    }}
                >Logout</HeaderText>
            </HeaderContainer>
        } else if (locate.pathname.includes("/comments/")) {
            return <HeaderContainer>
                <HeaderBack
                    onClick={() => {
                        loadingPostComments()
                        goToFeedPage(navigate)
                    }}
                >
                    <HeaderX></HeaderX>
                    <HeaderX></HeaderX>
                    <HeaderX></HeaderX>
                </HeaderBack>
                <LogoLabeddit src={LogoLabedditImg} />
                <HeaderText
                    onClick={() => {
                        window.localStorage.removeItem(token_name)
                        window.localStorage.removeItem("labeddit_nickname")
                        goToLoginPage(navigate)
                    }}
                >Logout</HeaderText>
            </HeaderContainer>
        } else {
            return <HeaderContainer>
                <HeaderBack
                    onClick={() => goToFeedPage(navigate)}
                >
                    <HeaderX></HeaderX>
                    <HeaderX></HeaderX>
                    <HeaderX></HeaderX>
                </HeaderBack>
                <LogoLabeddit src={LogoLabedditImg} />
                <HeaderText
                    onClick={() => {
                        window.localStorage.removeItem(token_name)
                        goToLoginPage(navigate)
                    }}
                >Logout</HeaderText>
            </HeaderContainer>
        }
    }

    return <>
        {showHeader()}
    </>
}