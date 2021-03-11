
import SelectDay from '../components/filters/SelectDay';
import { useSelector } from 'react-redux';
import nasaImage from '../components/nasaData/nasaImage';
import { Button } from 'reactstrap';


function NasaImages(props) {

    const nasaImages = useSelector(state => state.nasaImages);
    // console.log(nasaImages);
    //const [nasaImages, setImages] = useState([]);

    const getNasaImages = () => {
        const imageList = nasaImages.map((image,index)=> {
            // return <nasaImage
            //     key={index}
            //     title={image.title}
            //     explanation={image.explanation}
            //     date={image.date}
            // />
             return <>
             <div>
            {index}
            <img width="150" src={nasaImages.url} alt={nasaImage.title} />
            </div>
            <div><p> <strong>Title : </strong> {nasaImage.title}</p>
            <p> <strong>Date : </strong> {nasaImage.date}</p>
            <p className="image-description"> 
            <strong>Description : </strong>{nasaImage.explanation}</p>
            </div>
            </>

        })
        return imageList;
    }

    return <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="mb-5 ">
                    <h4>  NASA Gallery of the day </h4>
                </div>
            </div>
            <div className="row">

                <div className="col-md-3">
                    {/* dropdown */}
                    <SelectDay />
                </div>

                <div className="col-md-3">
                    {/* <Button color="primary m-4" >Reload</Button> */}
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 m-6">

                    {getNasaImages()}

                </div>
            </div>
        </div>
    </>
}

export default NasaImages;