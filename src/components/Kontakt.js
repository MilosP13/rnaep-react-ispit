import React from 'react'
import MapComponent from './MapComponent.js';
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './Kontakt.css';
import Button from '@mui/material/Button';
import { useState } from 'react';


function Kontakt() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name && email && message) {
          setSubmitted(true);
         
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          window.confirm('Uspesno poslata poruka');
        }
      };

  return (
    <>
    <div className='contact'>
            <div className='container'>
                <div className='col-1'>
                    <div className='content'>
                        <div><h2>Posalji nam poruku</h2>
                            <p>Zainteresovani smo da cujemo vase misljenje o trenutnoj situaciji u gradu</p>
                        </div>
                        <div className='address'>
                            <p>Kneza Mihajla 39</p>
                            <p>Smederevo, Srbija</p>
                        </div>
                        <div className='icons'>
                            <FaPhone style={{marginRight: '1rem'}} />
                            <p>+381 64645049</p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} />
                            <p>sosmederevo@gmail.com</p>
                        </div>
                        <div className='careers'>
                            <p>Kontaktiraj nas! <span>Posalji poruku!</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <form className='formaa' onSubmit={handleSubmit}>
                        <input type='text' id='name' value={name} placeholder='Ime i prezime' onChange={(e) => setName(e.target.value)} required/>
                        <input type='email' id='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
                        <input type='phone' id='phone' value={phone} placeholder='Telefon' onChange={(e) => setPhone(e.target.value)} required/>
                        <textarea name='message' placeholder='Poruka' cols='30' rows='10' id='message' value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                        <div className='checkbox'>
                            <input type='checkbox' required />
                            <p>Slazem se sa uslovima <span> pravila i privatsnosti </span> i
                             <span> kolacicima</span>.</p>
                        </div>
                        <Button type="submit" variant="contained" color="info">Submit</Button>
                    </form>
                    {submitted}
                </div>
            </div>
        </div>
       <MapComponent />
       </>
  )
}

export default Kontakt