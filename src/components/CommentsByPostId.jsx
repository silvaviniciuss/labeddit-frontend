import { useContext } from "react"
import { globalContext } from "../contexts/globalContext"

export const CommentsByPostId = ({commentPostId}) => {
    // console.log(commentPostId)

    const {posts} = useContext(globalContext)

    // console.log(postContent.length)

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>
                <>teste</>
            </div>
        </div>
    )
}