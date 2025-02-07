import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import { Helmet } from "react-helmet";
import "../Styles/LawyerPage.css";

const LawyerPage = () => {
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
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/signup">Registration</Link>
        </nav>
      </header>

      <div className="robot-container">
        <div className="robot"></div>
      </div>

      <section className="main-banner">
        <h1>About Us</h1>
      </section>

      <section className="about-section">
        <p>
          Lexosolution is a platform that makes finding the right lawyer easy.
          Our simple website and app let clients search for lawyers based on
          their specific legal needs. Our goal is to make getting legal help
          quick and stress-free. We provide detailed profiles of lawyers, secure
          ways to communicate, and easy appointment scheduling. Lexosolution
          connects clients with reliable lawyers for many legal issues, like
          criminal, family, corporate, intellectual property, and immigration
          law. We also help with documents such as bonds, legal agreements, and
          other types of legal documentation. We aim to make legal support
          accessible for everyone, saving time and effort for both clients and
          lawyers.
        </p>
        <img
          src="https://i.pinimg.com/474x/07/06/6c/07066c676a89eea0b5cd460a7d314000.jpg"
          alt="About Us"
          width="500px"
        />
      </section>
    </>
  );
};

export default LawyerPage;
