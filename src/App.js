// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Description from './components/Description';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/d" element={<Description/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
