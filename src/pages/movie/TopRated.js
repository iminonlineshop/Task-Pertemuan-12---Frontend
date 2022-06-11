import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function TopRatedMovie() {
    // menyimpan Api Key dan url
    const API_KEY = process.env.REACT_APP_API__KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    const [movies, setMovies] = useState ([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    async function getTopRatedMovies() {
        const response = await axios (ENDPOINTS.TOPRATED);
        
        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <>
            <Hero />
            <Movies title="Top Rated" movies={movies} />
        </>
    )
}

export default TopRatedMovie;