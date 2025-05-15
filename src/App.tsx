import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

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
      const result = await fetch("http://localhost:32771/movies");
      const jsonResult = await result.json();
      setMovies(jsonResult);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
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
