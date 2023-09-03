import DislikeImgRed from "../assets/dislike-red.png"
import DislikeImg from "../assets/dislike.png"

export const getDislikeImg = (like) => {
    switch(like) {
        case 0:
            return DislikeImgRed
        default:
            return DislikeImg
    }
}