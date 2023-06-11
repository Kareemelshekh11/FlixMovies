import { useState , useEffect } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';

import "./genres.scss";

function Genres(){

    const [MovieGenres , setMovieGenres] = useState([]);
    const [TvGenres , setTvGenres] = useState([]);

    
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((response)=>{
        setMovieGenres(response.data.genres);
      });
    });

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=dd4d819639705d332d531217b4f7c6b6`)
        .then((response)=>{
          setTvGenres(response.data.genres);
        });
    });

    return(
        <div>
            <Navbar/>
            <div className="container-fluid mt-20 mb-20">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="mb-5 mt-5">Movies Genres</h2>
                      {MovieGenres.map((gen)=>(
                        <Link to={"/movie-genre/"+gen.id+"/"+gen.name}>
                            <Button variant="contained" className='genre-card blue-theme'>{gen.name}</Button>
                        </Link>
                      ))}
                    </div>
                </div>
            </div>
            
            <div className="container-fluid mt-20 mb-20">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="mb-5 mt-5">Tv Genres</h2>
                      {TvGenres.map((gen)=>(
                        <Link to={"/tv-genre/"+gen.id+"/"+gen.name}>
                            <Button variant="contained" className='genre-card blue-theme'>{gen.name}</Button>
                        </Link>
                      ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Genres;