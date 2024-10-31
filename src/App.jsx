 import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import About from './Pages/About.jsx';
import PageErreur from './Pages/Error.jsx';
import Home from './Pages/Home.jsx';
import Logement from './Pages/Logement.jsx';
import Header from './Components/Home/Header.jsx';
import Footer from './Components/Home/Footer.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<PageErreur />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

