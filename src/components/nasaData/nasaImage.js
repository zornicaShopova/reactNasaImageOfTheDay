import {
    Card, 
    CardImg,
    CardText,
    CardTitle,
  } from 'reactstrap';

import nasa_constants from '../../nasa_constant';

const ImageOfTheDay = props => {
    return <>
      <div className="col-md-4">
        <Card className="mb-3">
          <CardImg 
         src={`${nasa_constants.posterPath}${nasa_constants.urlImage}`} 
          />
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.explanation}</CardText>
          <CardText>{props.date}</CardText>
          
        </Card>
      </div>
    </>
  };
  
export default ImageOfTheDay;
  