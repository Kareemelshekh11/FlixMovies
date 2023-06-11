import { useState , useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillPlayFill , BsStarFill } from "react-icons/bs";
import { Autoplay } from 'swiper';
import 'swiper/css';
import './movies-slider.scss';
import { Link } from 'react-router-dom';

function Movies_Slider(){

    const [movies , setMovies] = useState([]);
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=dd4d819639705d332d531217b4f7c6b6")
    .then((response)=>{
      setMovies(response.data.results);
    });
  });
  
    return(
        <div className="listing container">
            <div className="listing__head">
               <h3 class="listing__title">Trending Movies</h3>
               <Link to="/movies" className='listing__explore'><strong>Explore All</strong></Link>
            </div>
            <Swiper 
            className="mySwiper"
            loop={true}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            >

              {movies.map((movie)=>(
                <SwiperSlide>
                  <Link to={"/movies/"+movie.id}>
                     <div class="listing-item-style">
                        <div className="overlay">
                          <div class="hover"><BsFillPlayFill/> PLAY NOW</div>
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
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
    )
}

export default Movies_Slider;