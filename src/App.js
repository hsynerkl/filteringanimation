import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion';
// df1c3eef1ff092c3bdc1fd96bd4c8dc0
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    getPopular();

  }, [])


  const getPopular = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=df1c3eef1ff092c3bdc1fd96bd4c8dc0&language=en-US&page=1')
    setPopular(data.results)
    setFiltered(data.results)

  }


  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}

export default App;
