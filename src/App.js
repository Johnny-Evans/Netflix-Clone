import React from "react";
import Row from "./Components/Row/Row"; 
import requestUrls from "./requests/requestUrls";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
        <Header />
        <main style={{marginTop: "3rem"}}>
          <Row isLarge={true} title="Netflix Originals" fetchUrl={requestUrls.netflixOriginals}/>
          <Row title="Trending" fetchUrl={requestUrls.trending}/>
          <Row title="Top Rated" fetchUrl={requestUrls.topRated}/>
          <Row title="Action Movies" fetchUrl={requestUrls.actionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requestUrls.comedyMovies}/>
          <Row title="Horrow Movies" fetchUrl={requestUrls.horroMovies}/>
          <Row title="Romantic Movies" fetchUrl={requestUrls.romanticMovies}/>
          <Row title="Documentaries" fetchUrl={requestUrls.documentaries}/>
        </main>
    </div>
  );
}

export default App;
