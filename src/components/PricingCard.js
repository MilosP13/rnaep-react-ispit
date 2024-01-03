import "./PricingCard.css";
import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Obicna donacija -</h3>
                <span className="bar"></span>
                <p className="btc">2.000RSD</p>
                <p>- 10 drveca -</p>
                <p>- 10 kucica za ptice -</p>
                <p>- 1 klupa -</p>
                <p>- 1 ljuljaska -</p>
                <Link to="/kontakt" >
                <Button className="btn" type="submit" variant="contained" color="info">DONIRAJ</Button>
                </Link>
            </div>

            <div className="card">
                <h3>- Premium donacija -</h3>
                <span className="bar"></span>
                <p className="btc">5.000RSD</p>
                <p>- 30 drveca -</p>
                <p>- 30 kucica za ptice -</p>
                <p>- 5 klupa -</p>
                <p>- 2 ljuljaska -</p>
                <Link to="/kontakt" >
                <Button className="btn" type="submit" variant="contained" color="info">DONIRAJ</Button>
                </Link>
            </div>

            <div className="card">
                <h3>- UltraEco donacija -</h3>
                <span className="bar"></span>
                <p className="btc">10.000RSD</p>
                <p>- 70 drveca -</p>
                <p>- 30 kucica za ptice & 30 za pse -</p>
                <p>- 20 klupa -</p>
                <p>- Ceo park sa igralistem -</p>
                <Link to="/kontakt" >
                <Button className="btn" type="submit" variant="contained" color="info">DONIRAJ</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard
