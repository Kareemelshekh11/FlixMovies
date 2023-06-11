import { useState , useEffect } from 'react';
import axios from 'axios';
import { BsFillPlayFill , BsStarFill } from "react-icons/bs";
import './tv.scss';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Pagination_pages from '../pagination/pagination';
import { Link } from 'react-router-dom';


function Tv(){

    const [TVs , setTVs] = useState([]);
    const [page , setPage] = useState(1);

    
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=${page}`)
      .then((response)=>{
        setTVs(response.data.results);
      });
    },[page]);

    return(
        <div>
            <Navbar/>
            <div className="listing container">
                <div className="listing-head">
                   <h3 className="listing__title"> Top Rated TV Shows</h3>
                </div>
                <div className="row">
                    {TVs.map((tv)=>(
                        <div className="col-lg-2 col-md-4">
                            <Link to={"/tv/"+tv.id}>
                               <div className="listing-item-style">
                                   <div className="overlay">
                                      <div className="hover"><BsFillPlayFill/> PLAY NOW</div>
                                   </div>
                                   <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+tv.poster_path}/>
                                   <h6>{tv.name}</h6>
                                   <p className='rate'>
                                    <BsStarFill/>
                                    <span>{tv.vote_average}</span>
                                     /10
                                   </p>
                                   <p className='year'>
                                     <span>{tv.first_air_date}</span>
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

export default Tv;