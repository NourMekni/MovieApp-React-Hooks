import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ posterURL, title, description, rating, videoURL }) => {
  return (
    <div>
      

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterURL} alt={title} />
        <Card.Body>
          <Card.Title>Name: {title}</Card.Title>
          {/*<Card.Text>Description: {description}</Card.Text>*/}
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
