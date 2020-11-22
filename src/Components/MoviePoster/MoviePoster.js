import React from "react";
import classes from "./MoviePoster.module.css";

function MoviePoster(props){
    let styles = [classes.Image]

    if(props.isLarge){
        styles.push(classes.Large);
    }

    return(
        <img onClick={props.clicked} className={styles.join(' ')} src={props.src} alt={props.alt}/>
    );
}

export default MoviePoster;