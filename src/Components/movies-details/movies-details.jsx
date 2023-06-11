import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './movies-details.scss';
import { Link } from 'react-router-dom';


function Movies_Details(){

    
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((res)=>{
        setMovies(res.data);
      });
    },[]);


    return(
        <div>
            <div className="row">
              <h1>{movies.original_title}</h1>
            </div>
        </div>
    )
}

export default Movies_Details;