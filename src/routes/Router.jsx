import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Feed } from "../pages/Feed/Feed"
import { Comments } from "../pages/Comments/Comments"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/comments/:postId" element={<Comments/>}/>
        </Routes>
        </BrowserRouter>
    )
}