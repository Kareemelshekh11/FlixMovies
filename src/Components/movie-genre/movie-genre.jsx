import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './movie-genre.scss';
import { BsFillPlayFill , BsStarFill } from "react-icons/bs";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Pagination_pages from '../pagination/pagination';
import { Link } from 'react-router-dom';

function Movie_Genre(){

    const [MovieGenres , setMovieGenres] = useState([]);
    const [page , setPage] = useState(1);
    const params = useParams();
    
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/genre/${params.id}/movies?api_key=dd4d819639705d332d531217b4f7c6b6&page=${page}`)
      .then((response)=>{
        setMovieGenres(response.data.results);
      });
    },[page]);

    return(
        <div>
            <Navbar/>
            <div className="listing container">
                <div className="listing-head">
                   <h3 className="listing__title"> Movie Genre : {params.name}</h3>
                </div>
                <div className="row">
                    {MovieGenres.map((gen)=>(
                        <div className="col-lg-2 col-md-4">
                            <Link to={"/movies/"+gen.id}>
                               <div className="listing-item-style">
                                   <div className="overlay">
                                      <div className="hover"><BsFillPlayFill/> PLAY NOW</div>
                                   </div>
                                   <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+gen.poster_path}/>
                                   <h6>{gen.title}</h6>
                                   <p className='rate'>
                                    <BsStarFill/>
                                    <span>{gen.vote_average}</span>
                                     /10
                                   </p>
                                   <p className='year'>
                                     <span>{gen.release_date}</span>
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

export default Movie_Genre;