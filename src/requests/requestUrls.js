const API_KEY = "8d1e8511d31f7206d63d37f7be7f624c";

const request = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;