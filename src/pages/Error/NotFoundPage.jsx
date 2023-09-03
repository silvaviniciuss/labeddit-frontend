import NotFoundImg from "../../assets/notfound.png"
import { LabedditTitle } from "../Login/LoginStyle"
import { NotFoundPageContainer } from "./NotFoundPageStyle"

export const NotFoundPage = () => {
    
    return (
        <NotFoundPageContainer>
            <LabedditTitle style={{textAlign:"center"}}>Página não encontrada</LabedditTitle>
            <img src={NotFoundImg}/>
        </NotFoundPageContainer>
    )
}