import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import { loadJsonFiles } from '../utils/loadJsonFiles';

function CardCourses(indexs) {
  const jsonData = loadJsonFiles();
  const title = jsonData[indexs.index].title
  const description = jsonData[indexs.index].description
  const logo = process.env.REACT_APP_FOR_PATH + jsonData[indexs.index].logo

  const w = window.innerWidth < 1000 ? '20rem' : '16rem'
  return (
    <Card boxshadow='dark-lg' style={{ width: w }}>
      <Card.Img 
      variant="top" 
      src={logo}
      style={{height : "15rem", 
            width:"10rem",
            marginLeft:"2rem", 
            marginTop:"1rem"}} 
            />
      <Card.Body>
        <Card.Title style={{ height: "7rem" }} >{title}</Card.Title>
        <Card.Text style={{ height: "13rem" }}>
          {description}
        </Card.Text>
        <Button 
          as={Link} 
          to={`/courseOverview`} 
          state={{ indexs }} 
          variant="primary"
        >
          Course Overview
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardCourses;