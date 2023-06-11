import { useState , useEffect } from 'react';
import axios from 'axios';
import { BsFillPlayFill , BsStarFill } from "react-icons/bs";
import './movies.scss';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Pagination_pages from '../pagination/pagination';
import { Link } from 'react-router-dom';


function Movies(){

    const [movies , setMovies] = useState([]);
    const [page , setPage] = useState(1);

    
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=${page}`)
      .then((response)=>{
        setMovies(response.data.results);
      });
    },[page]);

    return(
        <div>
            <Navbar/>
            <div className="listing container">
                <div className="listing-head">
                   <h3 className="listing__title"> Top Rated Movies</h3>
                </div>
                <div className="row">
                    {movies.map((movie)=>(
                        <div className="col-lg-2 col-md-4">
                            <Link to={"/movies/"+movie.id}>
                               <div className="listing-item-style">
                                   <div className="overlay">
                                      <div className="hover"><BsFillPlayFill/> PLAY NOW</div>
                                   </div>
                                   <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+movie.poster_path}/>
                                   <h6>{movie.title}</h6>
                                   <p className='rate'>
                                    <BsStarFill/>
                                    <span>{movie.vote_average}</span>
                                     /10
                                   </p>
                                   <p className='year'>
                                     <span>{movie.release_date}</span>
                                   </p>
                                </div>
                  </Link>
                        </div>
                    ))}
                </div>
                <Pagination_pages setPage={setPage} page={page}/>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Movies;