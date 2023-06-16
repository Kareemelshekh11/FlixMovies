import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './person-details.scss';
import  NavBar from '../navbar/navbar';
import  Footer from '../footer/footer';


function Person_Details(){

    const params = useParams();
    const [persons, setPersons] = useState([]);

    useEffect(()=>{

        //person details api
  
        axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=dd4d819639705d332d531217b4f7c6b6`)
        .then((res)=>{
          setPersons(res.data);
        })

    },[]);

    return(
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                       <div className="spacing">
                       <div className="left">
                          <div className="poster">
                            <img alt={persons.name} src={"https://image.tmdb.org/t/p/original/"+persons.profile_path}/>
                          </div>
                        </div>
                        <div className="right">
                          <div className="overview">
                            <h2 className="title">{persons.name}</h2>
                            <div>{persons.biography}</div>
                          </div>
                          <div className="stats">
                            <ul className='nolist'>
                              <li>
                                <div className="label"> Known For : </div>
                                <div className="value">{persons.known_for_department}</div>
                              </li>
                              <li>
                                <div className="label"> Born : </div>
                                <div className="value">{persons.birthday} min</div>
                              </li>
                              <li>
                                <div className="label"> Place of Birth :</div>
                                <div className="value">{persons.place_of_birth}</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Person_Details;