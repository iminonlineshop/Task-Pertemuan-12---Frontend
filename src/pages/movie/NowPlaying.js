import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function NowPlayingMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getNowplayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getNowplayingMovies() {
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    console.log(movies);
    return (
        <>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </>
    )
}

export default NowPlayingMovie;