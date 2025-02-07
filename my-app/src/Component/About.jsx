import React from "react";
import { Helmet } from "react-helmet";
import "../Styles/About.css"

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/lexo">Home</a>
          <a href="/Service">Our Services</a>
          <a href="/SignUp">SignUp</a>
          <a href="/LawPage">About Us</a>
        </nav>
      </header>

      <section className="main-banner">
        <h1>Hire</h1>
        <p>We provide expert lawyers who have expert legal solutions tailored to your needs.</p>
      </section>

      <section className="services-section">
        <div className="service-card card1">
          <h3><a href="/lawyers">Criminal Lawyers</a></h3>
        </div>
        <div className="service-card card2">
          <h3><a href="/Div">Divorce Lawyers</a></h3>
        </div>
        <div className="service-card card3">
          <h3><a href="/Cop">Corporate Lawyers</a></h3>
        </div>
        <div className="service-card card4">
          <h3><a href="/lab">Labour Lawyers</a></h3>
        </div>
        <div className="service-card card5">
          <h3><a href="/Em">Employment Lawyers</a></h3>
        </div>
        <div className="service-card card6">
          <h3><a href="/Imm">Immigration Lawyers</a></h3>
        </div>
        <div className="service-card card7">
          <h3><a href="/Est">Estate Planning Lawyers</a></h3>
        </div>
        <div className="service-card card8">
          <h3><a href="/Con">Constitutional Lawyers</a></h3>
        </div>
        <div className="service-card card9">
          <h3><a href="/Tax">Tax Lawyers</a></h3>
        </div>
        <div className="service-card card10">
          <h3><a href="/ai">Comrade</a></h3>
        </div>
      </section>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2025 Lexolution. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default About;
