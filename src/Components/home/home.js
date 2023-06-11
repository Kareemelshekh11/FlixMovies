import Banner from "../banner/banner";
import Footer from "../footer/footer";
import Movies_Slider from "../movies-slider/movies-slider";
import Navbar from "../navbar/navbar";
import Tv_Slider from "../tv-slider/tv-slider";

function Home(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Movies_Slider/>
            <Tv_Slider/>
            <Footer/>
        </div>
        
    )
}

export default Home;