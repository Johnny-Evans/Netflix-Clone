import React, {useState, useEffect} from "react";
import Logo from "../../assets/logo.png";
import WatchingLogo from "../../assets/who-is-watching.png";
import axios from "../../requests/axios-instance";
import requestUrls from "../../requests/requestUrls";
import classes from "./Header.module.css";

function Header(props){
    const [movie, setMovie] = useState();
    
    useEffect(() => {
        axios.get(requestUrls.netflixOriginals)
         .then(response => {
             const selectedMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
             setMovie(selectedMovie);
         })
         .catch(error => {
             console.log(error);
         });

    }, []);

    const headerStyles = {
        height: "80vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    };

    function truncateString(str, num) {
        return str?.length > num ? str.substr(0, num - 1) + "..." : str ;
    }

    return(
        <header style={headerStyles} className={classes.Header}>
            <div className={classes.Navbar}>
                <div style={{zIndex: '2'}}><img src={Logo} width="120" alt="Netflix"/></div>
                <div style={{zIndex: '2'}}><img src={WatchingLogo} style={{objectFi: "contain"}} width="55" height="45" alt="Netflix"/></div>
            </div>

            <div style={{zIndex: '2'}} className={classes.HeaderContent}>
                <div style={{zIndex: '2'}}><h1>{movie?.name}</h1></div>
                <div className={classes.Buttons}>
                    <div style={{zIndex: '2'}}><button>Play</button></div>
                    <div style={{zIndex: '2'}}><button>My List</button></div>
                </div>
                <div style={{zIndex: '2'}}><p>{ truncateString(movie?.overview, 100)}</p></div>
            </div>
            <div className={classes}></div>
        </header>
    );
}

export default Header;