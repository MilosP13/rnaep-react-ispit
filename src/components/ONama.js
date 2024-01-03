import React from 'react'
import Odbrojavanje from './Odbrojavanje'
import './ONama.css';
import PricingCard from './PricingCard';

function ONama() {
  return (
    <div className='oNama-body'>
      <div className='oNama'>
      <h1>O nama</h1>
      </div>
      <div className='oNama-text'>
        <p>Mi smo drustvo koje se bori za zastitu zivotne sredine i podizanje svesti o 
          zagadjenju i vremenskim promenama koje uticu na sve oko nas. Na ovo stranici mozete procitati o
          danu drveca i takodje mozete donirati novac u svrhe zasadjivanja novih drveca u nasem gradu!
        </p>
      </div>

     <PricingCard />




        <Odbrojavanje />
    </div>
  )
}

export default ONama