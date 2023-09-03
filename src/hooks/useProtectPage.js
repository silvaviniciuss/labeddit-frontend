import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { token_name } from "../constants/url"
import { goToLoginPage } from "../routes/Coordinator"

export const useProtectPage = (navigate) => {
    
    useEffect(()=>{
        const token = window.localStorage.getItem(token_name)
        if(!token) {
           goToLoginPage(navigate)
        }
    },[navigate])
}