import React,{useEffect,useState} from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies=async (title)=>{
        const response= await  fetch(`${'https://www.omdbapi.com?apikey=9cebafaf'}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
        console.log(movies);
    }
   
useEffect(()=>{
searchMovies('avengers');
},[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
           placeholder='Search for movies' 
           value={searchTerm}
           onChange={(e)=> setSearchTerm(e.target.value)}
    
        />
       <img  
           src={SearchIcon} 
           alt="search"
           onClick={()=>searchMovies(searchTerm)}

        />

    </div>

   
    {movies?.length > 0 
    ?(
        <div className='container'>
        {movies.map((movie)=>(
            <MovieCard  movie={movie}/>
    ))}
        </div>
    ) : (
        <div className='empty'>
        <h2>No Movies Found</h2>
        </div>
    )
    }

    </div>
  );
}

export default App

//9cebafaf