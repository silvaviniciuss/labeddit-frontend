import axios from "axios"
import {useInput} from "../../hooks/useInput"
import {base_url, token_name} from "../../constants/url"
import { goToFeedPage } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    const {input, onChange} = useInput({email: "", password: ""})
    
    const login = async (e) => {
        e.preventDefault()
        try {
            const body = {
                email: input.email,
                password: input.password
            }

            const res = await axios.post(base_url + "/users/login", body)

            window.localStorage.setItem(token_name, res.data.token)

        } catch (error) {
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    }

    return(
        <>
        <h1>Login</h1>
        <main>
            <form onSubmit={login} onClick={()=>goToFeedPage(navigate)}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={onChange}
                    placeholder="nome@email.com"
                    required
                />
                <label htmlFor="password">Senha:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={onChange}
                    placeholder="Digite sua senha"
                    required
                />
                <button
            
                >Continuar</button>
            </form>
        </main>
        </>

    )
}