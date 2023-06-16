import { useState , useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { useParams } from 'react-router-dom';
import { BsFillPlayFill , BsStarFill } from 'react-icons/bs';
import { AiFillStar } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import './movies-details.scss';
import  NavBar from '../navbar/navbar';
import  Footer from '../footer/footer';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';


function Movies_Details(){

    
    const params = useParams();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [casts, setCasts] = useState([]);
    const [recommends, setRecommends] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(()=>{

      //movie-details and genres api

      axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((res)=>{
        setMovies(res.data);
        setGenres(res.data.genres);
      })

      //Casts api

      axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((response)=>{
        setCasts(response.data.cast);
      })

      //recommends movie api

      axios.get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((rec)=>{
        setRecommends(rec.data.results);
      })

      //images

      axios.get(`https://api.themoviedb.org/3/movie/${params.id}/images?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((rec)=>{
        setImages(rec.data.backdrops);
      })

      //videos

      axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((rec)=>{
        setVideos(rec.data.results);
      })
    },[]);

    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
     setValue(newValue);
    };

    return(
        <div>
          <NavBar/>
            <div className="hero">
               <div className="swiper">
                <div className="wrapper">
                <div className='backdrop'>
                  <img alt={movies.title} src={"https://image.tmdb.org/t/p/original/"+movies.backdrop_path}/>
               </div>
               <div className="pane">
                <div>
                    <h1 className="name">
                        {movies.title}
                    </h1>
                    <div className="meta">
                        <div className="info">
                            <span className="rate"><AiFillStar/><span>{movies.vote_average}</span>/10</span>
                            <span>{movies.vote_count} Reviews</span>
                            <span> {movies.release_date}</span>
                        </div>
                    </div>
                    <div className="desc">
                        {movies.overview}
                    </div>
                    <button className='button button--icon trailer'>
                      <span className='mr-2'>
                        <BsFillPlayFill/>
                      </span>
                      <span className='txt'>Watch Trailer</span>
                    </button>
                </div>
               </div>
                </div>
               </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Box sx={{ width: '100%' }} className='m-10'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Photos" {...a11yProps(1)} />
                        <Tab label="Videos" {...a11yProps(2)} />
                      </Tabs>
                    </Box>


                    <TabPanel value={value} index={0}>
                      <div className="listing-space info__movies">
                        <div className="left">
                          <div className="poster">
                            <img alt={movies.original_title} src={"https://image.tmdb.org/t/p/original/"+movies.poster_path}/>
                          </div>
                        </div>
                        <div className="right">
                          <div className="overview">
                            <h2 className="title">Storyline</h2>
                            <div>{movies.overview}</div>
                          </div>
                          <div className="stats">
                            <ul className='nolist'>
                              <li>
                                <div className="label"> Released : </div>
                                <div className="value">{movies.release_date}</div>
                              </li>
                              <li>
                                <div className="label"> Runtime : </div>
                                <div className="value">{movies.runtime} min</div>
                              </li>
                              <li>
                                <div className="label"> Genre : </div>
                                {genres.map((gen)=>(
                                  <div className="comaa">
                                    <Link to={"/movie-genre/"+gen.id+"/"+gen.name}>{gen.name}</Link>
                                  </div>
                                ))}
                              </li>
                              <li>
                                <div className="label"> Status :</div>
                                <div className="value">{movies.status}</div>
                              </li>
                              <li>
                                <div className="label"> Language :</div>
                                <div className="value">{movies.original_language}</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="listing-space">
                        <div className="listing__head">
                         <h3 class="listing__title">Cast</h3>
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

                      {casts.map((cast)=>(
                        <SwiperSlide>
                          <Link to={"/person/"+cast.id}>
                           <div class="listing-item-style">
                             <div className="overlay">
                               <div class="hover">DETAILS</div>
                             </div>
                             <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+cast.profile_path}/>
                             <h6>{cast.name}</h6>
                           </div>
                          </Link>
                        </SwiperSlide>
                      ))}
                      </Swiper>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <div className="listing-space backdrop-images">
                        <div className="items row">
                          {images.map((img)=>(
                            <div className="item-backdrop col-lg-3 col-md-4 col-sm-6">
                              <div className="image">
                                <img src={"https://image.tmdb.org/t/p/original/"+img.file_path}/>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <div className="listing-space videos__status">
                        <div className="items row">
                          {videos.map((vid)=>(
                            <div className="item col-lg-4 col-md-6 col-sm-12">
                              <div className="link">
                                <div className="image">
                                  <a href={"https://www.youtube.com/watch?v="+vid.key}>
                                    <img src={"https://img.youtube.com/vi/"+vid.key+"/mqdefault.jpg"}/>
                                  </a>
                                  <div className="icon">
                                    <FiPlayCircle/>
                                  </div>
                                </div>
                                <div className="name">
                                  {vid.name}
                                </div>
                                <div className="type">
                                  {vid.type} 
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                  </Box>

                  
                  <div className="listing-space mt-20 mb-5">
                      <div className="listing__head">
                        <h3 class="listing__title">Recommended Movies</h3>
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

                      {recommends.map((recommend)=>(
                        <SwiperSlide>
                          <a href={"/movies/"+recommend.id}>
                           <div class="listing-item-style">
                             <div className="overlay">
                               <div class="hover"><BsFillPlayFill/> PLAY NOW</div>
                             </div>
                             <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+recommend.poster_path}/>
                             <h6>{recommend.title}</h6>
                             <p className='rate'>
                               <BsStarFill/>
                               <span>{recommend.vote_average}</span>
                               /10
                             </p>
                             <p className='year'>
                               <span>{recommend.release_date}</span>
                              </p>
                           </div>
                          </a>
                        </SwiperSlide>
                      ))}
                      </Swiper>
                  </div>
                </div>
              </div>
            </div>
           
          <Footer/>
        </div>
    )
}

export default Movies_Details;