import { FaTwitter , FaGithub , FaLinkedin } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import './footer.scss';

function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="twitter.com">
                                        <FaTwitter/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="github.com">
                                        <FaGithub/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="linkedin.com">
                                        <FaLinkedin/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/">
                                        <BiEnvelope/>
                                    </a>
                                </li>
                            </ul>
                            <p>© 2023 Kareem Weal. All rights reserved.</p>
                            <p> 
                                Designed and built by me, data provided by
                                <a href="https://www.themoviedb.org/">TMDb</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;