import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import { nanoid } from "nanoid";

function Movies(props) {
   // Membuat state movies
  const {title , movies, setMovies}= props;

  // Membuat fungsi untuk handle onClick
  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Aquament",
      year: 2020,
      type: "Movie",
      poster : "https://picsum.photos/300/400",
    };
  
  // Menjalankan fungsi setMovie
  // Menambahkan movie ke dalam movies
  // Spread operator : copy data array
    setMovies([...movies, movie]);

  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__judul}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;