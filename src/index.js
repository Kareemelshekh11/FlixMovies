import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'elegant-icons/style.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/home/home';
import Movies from './Components/movies/movies';
import Tv from './Components/tv/tv';
import Genres from './Components/genres/genres';
import Movies_Details from './Components/movies-details/movies-details';
import Tv_Details from './Components/tv-details/tv-details';
import Movie_Genre from './Components/movie-genre/movie-genre';
import Tv_Genre from './Components/tv-genre/tv-genre';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:id" element={<Movies_Details/>}/>
          <Route path="/tv" element={<Tv/>}/>
          <Route path="/tv/:id" element={<Tv_Details/>}/>
          <Route path="/geners" element={<Genres/>}/>
          <Route path="/movie-genre/:id/:name" element={<Movie_Genre/>}/>
          <Route path="/tv-genre/:id/:name" element={<Tv_Genre/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
