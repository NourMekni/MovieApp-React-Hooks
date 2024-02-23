import React, { useState } from 'react';
import Movie from './Movie';
import { Card } from 'react-bootstrap';
// MovieCard component
const MovieCard = ({ posterURL, title,description,rating}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={posterURL} alt={title} />
     <Card.Body>
       <Card.Title > Name : {title}</Card.Title>
       <Card.Text > description : {description }</Card.Text>
       <Card.Text> Rating :{rating } </Card.Text>
       
     </Card.Body>
   </Card>
   </div>
   )};
   
   {/* <div className="movie-card">
      
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <img src={posterURL} alt={title} />
  </div>*/}
  


export default MovieCard;