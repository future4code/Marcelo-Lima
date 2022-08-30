export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToMovieDetails = (navigate, movieId) => {
    navigate(`/moviedetails/${movieId}`)
}