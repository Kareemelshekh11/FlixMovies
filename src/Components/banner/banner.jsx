import { useState , useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from "react-icons/ai";
import 'swiper/css';
import { Autoplay } from 'swiper';
import './banner.scss';
import { Link } from 'react-router-dom';

function Banner(){

  const [movies , setMovies] = useState([]);
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=dd4d819639705d332d531217b4f7c6b6")
    .then((response)=>{
      setMovies(response.data.results);
    });
  });
   
    return(
      <div>
        <div className='hero'>
          <Swiper className="mySwiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          >
          {movies.map((movie)=>(
            <SwiperSlide>
               <div className='backdrop'>
                  <img alt={movie.title} src={"https://image.tmdb.org/t/p/original/"+movie.backdrop_path}/>
               </div>
               <div className="pane">
                <div>
                    <h1 className="name">
                        <Link to={"/movies/"+movie.id}>{movie.title}</Link>
                    </h1>
                    <div class="meta">
                        <div class="info">
                            <span class="rate"><AiFillStar/><span>{movie.vote_average}</span>/10</span>
                            <span> {movie.vote_count} Reviews</span>
                            <span> {movie.release_date}</span>
                        </div>
                    </div>
                    <div class="desc">
                        {movie.overview}
                    </div>
                </div>
               </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    )
}

export default Banner;