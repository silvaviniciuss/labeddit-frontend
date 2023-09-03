import LikeImgGreen from "../assets/like-green.png"
import LikeImg from "../assets/like.png"

export const getLikeImg = (like) => {
    switch(like) {
        case 1:
            return LikeImgGreen
        default:
            return LikeImg
    }
}