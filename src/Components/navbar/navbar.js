import './navbar.scss';
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { FiMenu , FiHome , FiVideo , FiTv } from "react-icons/fi";
import { FcGenericSortingDesc } from "react-icons/fc";

function Navbar(){

      return(
        <div>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <Link className='navbar-brand' to="/">FlixMovies</Link>
            <ul className='navbar-nav ml-auto listMenu'>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/movies'>Movies</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/tv'>TV Shows</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/geners'>Geners</Link>
                </li>
            </ul>

            <span class="sidebar-nav-btn" role='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <FiMenu/>
            </span>

            
          </nav>

          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
               <IoIosClose role="button" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>
            <div class="offcanvas-body">
              <div className='menu-container'>
                <div className='menu-item'>
                  <FiHome/>
                  <Link to='/home'>Home</Link>
                </div>
                <div className='menu-item'>
                  <FiVideo/>
                  <Link to='/movies'>Movies</Link>
                </div>
                <div className='menu-item'>
                  <FiTv/>
                  <Link to='/tv'>TV Shows</Link>
                </div>
                <div className='menu-item'>
                  <FcGenericSortingDesc/>
                  <Link to='/geners'>Geners</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Navbar;
