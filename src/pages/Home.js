import Carousel from '../components/carousel/Carousel';
import About from '../components/about/About';

function Home(props) {
    return <>
        <div className="container">
            <div className="row">
                <Carousel/>
            </div>
            <div className="row">
                <About/>
            </div>
        </div>
   
    </>
}
export default Home;