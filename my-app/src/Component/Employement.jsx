import React from "react";
import "../Styles/Employment.css"

const lawyers = [
  {
    name: "John Doe",
    experience: "10+ years",
    cases: 150,
    location: "New York, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Jane Smith",
    experience: "8+ years",
    cases: 120,
    location: "Los Angeles, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
];

const Employment = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Lexolution</h1>
        <nav>
            <h3>
          <a href="/lexo">Home</a>
          <a href="/Service">Our Service</a>
          <a href="/LawPage">About us</a>
          <a href="/SignUp">Sign Up</a>
          </h3>
        </nav>
        <div className="contact">
          <span>(780) 429-2300</span> | <span>lexilot.com</span>
        </div>
      </header>

      <section className="hero">
        <h2>Hire a Employment Lawyer.</h2>
        <h3>Advocating For Clients Since 1991</h3>
        <p>
          Lexolution is an Edmonton-based, multi-practice law firm, serving
          clients throughout India.
        </p>
      </section>

      <section className="lawyers">
        {lawyers.map((lawyer, index) => (
          <div key={index} className="lawyer-card4">
            <img src={lawyer.image} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <p className="one">Experience: {lawyer.experience}</p>
            <p className="two">Cases Solved: {lawyer.cases}</p>
            <p className="Three"> Location: {lawyer.location}</p>
            <button>Hire</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Employment;
