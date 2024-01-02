
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './FooterStyle.css'
import { Button } from './Button';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col solutions'>
                    <h6>Pokret</h6>
                    <ul>
                        <li><Link to='/' className='link'>Marketing</Link></li>
                        <li><Link to='/'className='link'>Analitika</Link></li>
                        <li><Link to='/'className='link'>Informacije</Link></li>
                        <li><Link to='/'className='link'>Sajtovi</Link></li>
                    </ul>
                </div>
                <div className='col support'>
                    <h6>Pomoc</h6>
                    <ul>
                        <li><Link to='/'className='link'>Upravljanje</Link></li>
                        <li><Link to='/'className='link'>Snabdevanje</Link></li>
                        <li><Link to='/'className='link'>Objasnjenje</Link></li>
                        <li><Link to='/'className='link'>API status</Link></li>
                    </ul>
                </div>
                <div className='col company'>
                    <h6>Kompanija</h6>
                    <ul>
                        <li><Link to='/'className='link'>O nama</Link></li>
                        <li><Link to='/'className='link'>Blog</Link></li>
                        <li><Link to='/'className='link'>Progronze</Link></li>
                        <li><Link to='/'className='link'>Zagadjenja</Link></li>
                    </ul>
                </div>
                <div className='col legal'>
                    <h6>Informacije</h6>
                    <ul>
                        <li><Link to='/'className='link'>Ko smo mi?</Link></li>
                        <li><Link to='/'className='link'>Zbog cega?</Link></li>
                        <li><Link to='/'className='link'>Kako?</Link></li>
                        <li><Link to='/'className='link'>Zasto?</Link></li>
                    </ul>
                </div>
                <div className='col-subscribe'>
                    <h6>Preplatite se na novosti</h6>
                    <p>Sve novosti vezane za zastitu zivotne sredine</p>
                    <div className='subscribe'>
                        <input type='email' placeholder='Unesite email' />
                        <Button   className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'>Preplati se</Button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='content'>
                    <div className='rights'>
                        <p>&copy; Milos.Pavlovic.2023/3276.</p>
                    </div>
                    <div>
                        <FaFacebook size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaInstagram size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaTwitter size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaGithub size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
