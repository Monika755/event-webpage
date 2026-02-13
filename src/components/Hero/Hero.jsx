import React from "react";
import "./Hero.css";     
import heroImg from "../../assets/heroImg.jpg";


export default function Hero () { 
 return ( 
    <section className="hero"> 
     <img   
     src={heroImg} 
     alt="Hero Image" 
     className="hero-img" 
      /> 
        <div className="hero-text"> 
            <h1>Discover Amazing Events</h1> 
            <p>Find the best events heppening near you!</p> 
            <button>Explore Events</button>
        </div>
     </section>
 );
}