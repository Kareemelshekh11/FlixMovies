import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './tv-details.scss';
import { Link } from 'react-router-dom';


function Tv_Details(){

    
    const params = useParams();
    const [tv, setTv] = useState([]);

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=dd4d819639705d332d531217b4f7c6b6`)
      .then((res)=>{
        setTv(res.data);
      });
    },[]);


    return(
        <div>
            <div className="row">
              <h1>{tv.original_title}</h1>
            </div>
        </div>
    )
}

export default Tv_Details;