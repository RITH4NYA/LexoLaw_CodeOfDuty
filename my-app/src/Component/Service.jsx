import React from "react";
import "../Styles/Service.css";



const OurServices = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/our-services">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <section className="main-banner">
        <h1>Our Services</h1>
        <p>We offer the best services to cater to your needs</p>
      </section>
      <section className="services-section1">
      <div className="service-card1 carda" style={{ width: "400px",height : "500px" }}>

          <h3>   
        <a href="/About"style={{ font: "inherit" }}>Lawyers</a> 
          </h3>
        </div>
        <div className="service-card1 cardb"style={{ width: "400px",height : "500px" }}>
          <h3>
            <a href="/Document">Documentation</a>
          </h3>
        </div>
        <div className="service-card1 cardc"style={{ width: "400px",height : "500px" }}>
          <h3>
            <a href="/ai">Comrade</a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default OurServices;
