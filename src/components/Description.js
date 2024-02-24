import React from 'react';
import { Link, useLocation,useParams } from 'react-router-dom';

const Description = () => {
  const data = useLocation() ;
  return (  
    <div>
      <h1>Title: {data.state.title}</h1>
      <video controls style={{ width: '50%', marginTop:'50px'}} >
        <source src={data.state.videoURL} type="video/mp4" />
      </video>
      <h3>Description : {data.state.description}</h3>
  <Link to="/"><h1>Back to Home</h1></Link> 
    </div>
  );
};

export default Description;
