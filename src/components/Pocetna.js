import React from 'react';
import { Button as Dugme } from './Button';
import './Pocetna.css';
import { Link } from 'react-router-dom';


const HomePage = () => {


  return (
    <div className="homepage-container">
      <div className='text-home-container'>
        <h1>Dobrodosli na stranicu Spasimo okolinu Smedereva</h1>
        <h2>Saznaj vise</h2>
        <div className='button-home-container'>

         <Link to='/zagadjenje'> <Dugme    buttonStyle='btn--primary' buttonSize='btn--large'>Zagadjenje</Dugme> </Link>
         <Link to='/prognoza'> <Dugme    buttonStyle='btn--primary' buttonSize='btn--large'>Prognoza</Dugme>   </Link> 

        </div>
      </div>
    </div>
  );
};

export default HomePage;
