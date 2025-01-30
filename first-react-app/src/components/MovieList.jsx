// import { useState } from "react";

// function MoviesList() {
//     const movies = [
//         {
//             id: 1,
//             title: "The Shawshank Redemption",
//             year: 1994,
//             synopsis: "Two imprisoned men find redemption.",
//         },
//         {
//             id: 2,
//             title: "The Dark Knight",
//             year: 2008,
//             synopsis: "Batman fights the menace known as the Joker.",
//         },
//         {
//             id: 3,
//             title: "Interstellar",
//             year: 2014,
//             synopsis: "Explorers travel through a wormhole in space.",
//         },
//     ];

//     // return (
//     //     <div className="MoviesList componentBox">
//     //         <ul> 
//     //             { movies.map(movie => (
//     //                 <li>{movie.title}</li>
//     //             )) }
//     //         </ul>
//     //     </div>
//     // )


//     // const movieItems = movies.map(movie => (
//     //     <li key={movie.id}>{movie.title}</li>
//     // ))

//     // return (
//     //     <div className="MovieList componentBox">
//     //         <ul>{movieItems}</ul>
//     //     </div>
//     // )

//     function Movie({title, year, synopsis}) {
//         return (
//             <li>
//                 <h3>{title}</h3> 
//                 <span>({year})</span>
//                 <div>{synopsis}</div>
//         </li>
//         )
//     }

//     //let newMovies = [...currentMovies];

//     const [currentMovies, setCurrentMovies] = useState(movies)
    
//     const handleReverseMovies = () => {
//             let newMovies = [...currentMovies]
//             newMovies.reverse()
//             setCurrentMovies(newMovies)
//         }

//         const handleDeleteMovie = (idToDelete) => {
//             const filteredMovies = currentMovies.filter(movie => movie.id !== idToDelete)
//             setCurrentMovies(newMovies)
//         }

//     let newMovies = [...currentMovies, {
//             id: 4, 
//             title: "The Whale", 
//             year: 2022,
//             synopsis: "A morbidly obese teacher attempts to reconnect with his daughter.",
//         }]
        
//     //     // remove an item from an array - RIGHT WAY using filter to create a new array without the removed item
//     //     let idToDelete = 2;
//     //     //let newMovies = currentMovies.filter(movie => movie.id != idToDelete);
        
//     //     // replace/update an item in an array - RIGHT WAY using map to create a new array including the updated item
//     //     let updatedSynopsis1 = 'Iconic heart-warming prison break movie';
//     //     //let newMovies = currentMovies.map(movie => movie.id === 1 ? {...movie, synopsis: updatedSynopsis1} : movie);
        
//     //     // sort/reverse an array - RIGHT WAY cloning the original first
//     //     let newMovies = [...currentMovies];

//         // newMovies.reverse();
//         // newMovies.sort();

//     const movieItems = currentMovies.map(movie => (
//         <Movie
//         key = {movie.id}
//         title = {movie.title}
//         year = {movie.year}
//         synopsis = {movie.synopsis}
//         />
//     ))

    
//     return (
//         <div className="MovieList componentBox">
//             <ul>
//                 { movieItems }
//             </ul>
//             <button onClick={handleReverseMovies}>Reverse List</button>
//             <button onClick={() => handleDeleteMovie(1)}>Delete Movie with ID of 1</button>
//         </div>
//     )
// }

//     export default MoviesList;


// Slide 79
import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";

function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: "1994",
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: "2008",
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: "2014",
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ]);

  const handleReverseMovies = () => {
    const newMovies = [...currentMovies].reverse();
    setCurrentMovies(newMovies);
  };

  const handleDeleteMovie = (idToDelete) => {
    const filteredMovies = currentMovies.filter(
      (movie) => movie.id !== idToDelete
    );
    setCurrentMovies(filteredMovies);
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // Assign a new ID
    setCurrentMovies([...currentMovies, newMovie]);
  };

  function Movie({ title, year, synopsis }) {
    return (
      <li>
        <h3>{title}</h3>
        <span>({year})</span>
        <div>{synopsis}</div>
      </li>
    );
  }

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  return (
    <div className="MoviesList componentBox">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={() => handleDeleteMovie(2)}>
        Delete Movie with ID 2
      </button>
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default MoviesList;
