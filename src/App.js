import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginsignup from "./Components/Loginsignup/Loginsignup";
import MoviePage from './Components/Movie/MoviePage';
import Forgotpass from './Components/Forgot/Forgotpass'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path='/forgot-password' element={<Forgotpass />} />
        <Route path="/movies" element={<MoviePage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
