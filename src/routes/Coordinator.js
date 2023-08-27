export const goToLoginPage = (navigate) => {
    navigate('/');
}

export const goToFeedPage = (navigate) => {
    navigate('/feed');
}

export const goToCommentPage = (navigate, postId) => {
    navigate(`/comments/${postId}`);
}

