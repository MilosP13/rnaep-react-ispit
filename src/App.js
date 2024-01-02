import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pocetna from './components/Pocetna';
import Prognoza from './components/Prognoza';



function App() {
  return (
    <>
      <Router>
        <Navbar />

          <Routes>
            <Route path='/' exact Component={Pocetna} />
            <Route path='/prognoza' exact Component={Prognoza} />



          </Routes>
      
         <Footer />
      </Router>
    </>
  );
}

export default App;
