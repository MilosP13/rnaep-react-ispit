import React from 'react'
import ChartZagadjenje from './ChartZagadjenje'
import './Zagadjenje.css';
import tablica from "../assets/tablica.png";

function Zagadjenje() {
  return (
    <>
    <div className='zagadjenje-container'>

        <ChartZagadjenje />

        <div className='objasnjenje-zagadjenja'>
          <h1>Objasnjenje podataka</h1>
          <img src={tablica} alt="tablica" />
        </div>
     
    </div>
     
    </>     
  )
}

export default Zagadjenje