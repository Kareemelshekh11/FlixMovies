import { useState , useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillPlayFill , BsStarFill } from "react-icons/bs";
import 'swiper/css';
import { Autoplay } from 'swiper';
import './tv-slider.scss';
import { Link } from 'react-router-dom';
import { FaTv } from 'react-icons/fa';

function Tv_Slider(){

    const [tvs , setTv] = useState([]);
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=dd4d819639705d332d531217b4f7c6b6")
    .then((response)=>{
      setTv(response.data.results);
    });
  });
  
    return(
        <div className="listing container">
            <div className="listing__head">
               <h3 class="listing__title">Trending TV Shows</h3>
               <Link to="/tv" className='listing__explore'><strong>Explore All</strong></Link>
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

              {tvs.map((tv)=>(
                <SwiperSlide>
                  <Link to={"/tv/"+tv.id}>
                     <div class="listing-item-style">
                        <div className="overlay">
                          <div class="hover"><BsFillPlayFill/> PLAY NOW</div>
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
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
    )
}

export default Tv_Slider;