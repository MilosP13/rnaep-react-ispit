import React, { useRef, useEffect } from "react";
import "./Odbrojavanje.css";
import tree from "../assets/pngegg(1).png";

const Odbrojavanje = () => {
  const myElementRef = useRef(null);

  useEffect(() => {
    const countDate = new Date("Apr 26, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const d = Math.floor(gap / day);
      const h = Math.floor((gap % day) / hour);
      const m = Math.floor((gap % hour) / minute);
      const s = Math.floor((gap % minute) / second);

      if (myElementRef.current) {
        myElementRef.current.querySelector("#day").innerText = d;
        myElementRef.current.querySelector("#hour").innerText = h;
        myElementRef.current.querySelector("#minute").innerText = m;
        myElementRef.current.querySelector("#second").innerText = s;
      } else {
        
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="discount">
      <div className="video">
        <img src={tree} alt="" />
      </div>
      <div className="rightSide">
        <div className="tajmer">
          <h1>Dan drveca je za:</h1>
          <div className="countdown" ref={myElementRef}>
            <div id="day"></div>
            <div id="hour"></div>
            <div id="minute"></div>
            <div id="second"></div>
          </div>
        </div>
        <div className="text-drvo">
          <p>
          Drveće je GLAVNI izvor prerađenog kiseonika u atmosferi. Ono predstavlja pluća naše planete. 
          Jedno razvijeno drvo bora ili nekog drugog sličnog drveta ima površinu listova koja može da pokrije od 40 do preko 120 ari zemljišta kiseonikom. 
          Šuma je savršena ekološka radionica, ali i idealno stanište za brojni živi svet (biljni i životinski ) i blagodet za čoveka.
          </p>
          <a href="/">Obidjite sajt</a>
        </div>
      </div>
    </div>
  );
};

export default Odbrojavanje;
