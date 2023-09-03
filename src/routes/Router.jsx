import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Feed } from "../pages/Feed/Feed"
import { Comments } from "../pages/Comments/Comments"
import { Header } from "../components/Header/Header"
import { Signup } from "../pages/Signup/Signup"
import { NotFoundPage } from "../pages/Error/NotFoundPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Login />} />
                <Route path="/users/signup" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/comments/:postId" element={<Comments />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}