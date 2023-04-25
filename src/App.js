//import logo from './logo.svg';
//import { useEffect } from 'react';
import Competence from './components/Competence';
import  Certification from './components/Certification';

import Stage from './components/Stage';
import Formation from './components/Formation';
import Profil from './components/Profil';
import Header from './components/Header'

import './index.css';
import { Link } from 'react-router-dom' 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
    <div>
        <Header/>
    </div>
    <nav className='navbar navbar-expand-lg '>
    <ul >
        <li className="nav-item"> <Link to="/" className="nav-link ">Accueil</Link></li>
        <li className="nav-item"> <Link to="/formation" className="nav-link ">Formations</Link></li> 
        <li className="nav-item"> <Link to="/compétence" className="nav-link ">Compétences Techniques</Link></li>             
        <li className="nav-item"> <Link to="/experience" className="nav-link ">Expériences Professionelles</Link></li>
        <li className="nav-item"> <Link to="/certification" className="nav-link ">Certifications</Link></li>

    </ul>
    </nav>
    <div>
        <Routes>
            <Route exact path="/" element={<Profil/>}></Route>
            <Route path="/formation" element={<Formation />} />
            <Route path="/compétence" element={<Competence />} />
            <Route path="/experience" element={<Stage />} />
            <Route path="/certification" element={<Certification />} />
        </Routes>
    </div>

   
    <Footer/>

    </BrowserRouter>
    </div>

  );
}

export default App;
