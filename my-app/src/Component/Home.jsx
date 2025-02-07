import React from "react";
import "../Styles/c.css";

const lexo = () => {
  
  const handleSOSClick = () => {
    alert("Emergency assistance requested! A representative will contact you shortly.");
  };

  return (
    <>
      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/Service">Our services</a>
          <a href="/LawPage">About Us</a>
          <a href="/ai">Comrade</a>
          <a href="#">SignUp</a>
        </nav>
        <div className="contact-info">
          <span>(780) 429-2300</span>
          <span>lexlot.com</span>
        </div>
      </header>
      <main className="main-banner">
        <h2>PERSONAL INJURY. CRIMINAL DEFENCE. FAMILY LAW.</h2>
        <h1>Advocating For Clients Since 1991</h1>
        <p>
          Chadi & Company is an Edmonton-based, multi-practice law firm, serving
          clients throughout Alberta and Western Canada.
        </p>
        <div className="buttons">
          <button className="consultation-btn">GET A CONSULTATION</button>
        </div>
        <div className="buttons">
        <button className="reviews-btn" onClick={handleSOSClick}>SOS</button>
        </div>
      </main>
      
      <div className="robot-container">
        <div className="robot"></div>
      </div>
      <div className="statistics">
          <div className="stat">
            <span>190+</span>
            <p>Cases</p>
          </div>
          <div className="stat">
            <span>30,000+</span>
            <p>Hours of Experience</p>
          </div>
          <div className="stat">
            <span>250+</span>
            <p>Successful Cases</p>
          </div>
        </div>
      <footer className="footer" style={{backgroundColor:"white"}}>
        <div className="google-review " style={{backgroundColor:"white"}}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztGREBxlF-dRM-QjtCkvj4nSfBqQnHnOj0Q&s"
            width="200px"
            alt="Google Review Badge"
          />
          
          <h3><span>4.8</span></h3>
         <h3> <a href="#reviews" style={{color:"black"}}>Read our 278 reviews </a></h3>
        </div>
        <div className="google-reviews-cards" style={{backgroundColor:"white"}}>
          {["Great service, highly recommended!", "Very professional and knowledgeable team.", "I had a great experience working with them.", "Excellent customer service, will return for sure!", "Top-notch legal expertise, highly satisfied.", "The team really goes above and beyond for their clients."].map((review, index) => (
            <div key={index} className="review-card">
              <img
                src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico"
                alt="Google"
                className="google-icon"
              />
              <p>{review}</p>
              <span>- Reviewer {index + 1}</span>
            </div>
          ))}
        </div>
        <div className="consultation-section">
          <div className="consultation-bg">
            <form className="consultation-form">
              <h3>Get Your Free Consultation</h3>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
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

      </footer>
    </>
  );
};

export default lexo;
