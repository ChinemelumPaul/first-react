import React, {useEffect, useState} from 'react'
import MovieCard from "./MovieCard"
import "./App.css"

//  f46e5eb4
const API_URL = 'https://www.omdbapi.com?apikey=f46e5eb4'

const App = () => {
  const [movies, setMovies] = useState([])
  const [look, setLook] = useState("")
   
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)  
    const data = await response.json()
    setMovies(data.Search)
  }    

  useEffect(
    () => {
        searchMovies("spiderman")
    }, []
  )

   return (
        <div className="app">
          <h1>MovieLand</h1>  

          <div className="search">
            <input 
              placeholder="Search for movies"
              value={look}
              onChange={(e) => setLook(e.target.value)}
            />   
             <button
               onClick={() => searchMovies(look)}
             >Search</button>
          </div>    

          {
            movies?.length > 0
              ? ( <div className="container">
                 {movies.map(
                  (movie) => (
                    
                    <MovieCard movie={movie}/>
                )
                 )}
               </div> )
               : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
               )
          }
         
        </div>
    )
}

export default App; 