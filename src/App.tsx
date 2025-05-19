import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import logo from "./assets/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg";

interface Movie {
  id: string;
  name: string;
  director: string;
  actors: string[];
  genre: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
}

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handlePressedButton = () => {
    setAlertVisibility(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:32768/movies");
      const jsonResult = await result.json();
      setMovies(jsonResult);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar
        logoSrc={logo}
        onSearch={async (query) => {
          const result = await fetch(
            `https://localhost:7234/movies?search=${encodeURIComponent(query)}`
          );
          const jsonResult = await result.json();
          setMovies(jsonResult);
        }}
      >
        <button className="btn btn-outline-info">Login</button>
      </Navbar>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}

      <Button color="warning" onClick={handlePressedButton} text="Ooopsie" />

      {movies.map((movie) => (
        <div key={movie.id} className="movies__item">
          <h3>{movie.name}</h3>
          <p>{movie.description}</p>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Actors:</strong> {movie.actors.join(", ")}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.releaseDate}
          </p>
          <img src={movie.imageUrl} alt={movie.name} width={200} />
        </div>
      ))}
    </div>
  );
}

export default App;
