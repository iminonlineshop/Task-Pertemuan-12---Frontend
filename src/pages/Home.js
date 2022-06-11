import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Counter from "../components/Counter";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../components/utils/data";

function Home() {
    const [movies, setMovies] = useState(data);
    
    return(
        <>
            <Hero />
            <Movies movies={movies}  setMovies={setMovies} />
            <AddMovieForm movies={movies}  setMovies={setMovies}/>
        </>
    );

    // return (
    //     <Counter />
    // )
}

// Export halaman
export default Home;