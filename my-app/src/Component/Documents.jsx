import React from 'react';
import '../Styles/Doc.css'; // Import your CSS file

const Documents = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Our Services</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="c.html">Home</a>
          <a href="our-services.html">Our Services</a>
          <a href="contact.html">Contact</a>
        </nav>
      </header>

      {/* Main Banner */}
      <section className="main-banner">
        <h1>Our Legal Services</h1>
        <p>
          We provide expert documentation and legal solutions tailored to your
          needs.
        </p>
      </section>

      {/* Services Cards */}
      <section className="services-section">
        <div className="service-card2 cardA">
          <h3>
            <a href="l.html">Bond Agreements</a>
          </h3>
        </div>
        <div className="service-card2 cardB">
          <h3>
            <a href="d.html">Contract Drafting</a>
          </h3>
        </div>
        <div className="service-card2 cardC">
          <h3>
            <a href="op.html">Business Operations</a>
          </h3>
        </div>
        <div className="service-card2 cardD">
          <h3>
            <a href="cr.html">Copyright Protection</a>
          </h3>
        </div>
        <div className="service-card2 cardE">
          <h3>
            <a href="tax.html">Tax Advisory</a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Documents;
