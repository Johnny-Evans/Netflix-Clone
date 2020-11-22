import React, { useState, useEffect } from "react";
import axios from "../../requests/axios-instance";
import Image from "../MoviePoster/MoviePoster";
import styles from "./Row.module.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    
    useEffect(() => {
        axios.get(props.fetchUrl)
         .then(response => {
             setMovies(response.data.results);
         })
         .catch(error => {
             console.log(error);
         });
    } ,[props.fetchUrl]);

    function handleClick(movie){
        alert(movie.name)
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
             .then(url => {
                 const urlParams = new URLSearchParams(new URL(url).search)
                 setTrailerUrl(urlParams.get('v'));
             })
             .catch(error => {
                 console.log(error);
             });
        }
    }

    return(
        <div className={styles.RowContainer}>
            <h2>{props.title}</h2>
            <div className={styles.RowContent}>
               {movies.map(movie => {
                   return <Image clicked={() => handleClick(movie)} isLarge={props.isLarge} key={movie.id} src={`https://image.tmdb.org/t/p/original/${props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.title}/>
               })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={{height:"500", width:"100%", playerVars:{autoplay: 1}}}/>}
        </div>
    );
}

export default Row;