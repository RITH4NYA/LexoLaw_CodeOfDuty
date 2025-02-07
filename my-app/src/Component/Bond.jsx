import React, { useState } from 'react';
import '../Styles/Bond.css'; // Importing CSS file for styling

const BondAgreementForm = () => {
    const [issuer, setIssuer] = useState('');
    const [bondholder, setBondholder] = useState('');
    const [principalAmount, setPrincipalAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [maturityDate, setMaturityDate] = useState('');
    const [issuanceDate, setIssuanceDate] = useState('');
    const [couponFrequency, setCouponFrequency] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [collateral, setCollateral] = useState('');
    const [law, setLaw] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            issuer,
            bondholder,
            principalAmount,
            interestRate,
            maturityDate,
            issuanceDate,
            couponFrequency,
            paymentMethod,
            collateral,
            law
        });
    };

    return (
        <div>
            <div className="navbar">
                <div className="logo">Lexolution</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
      <div className="robot-container">
        <div className="robot"></div>
      </div>

            
            <div className="form-container">
                <h2 className="form-title">Bond Agreement Form</h2>
                <form onSubmit={handleSubmit} className="bond-form">
                    <div className="form-group">
                        <label htmlFor="issuer">Issuer</label>
                        <input
                            type="text"
                            id="issuer"
                            value={issuer}
                            onChange={(e) => setIssuer(e.target.value)}
                            required
                            style={{width:"100%"}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bondholder">Bondholder</label>
                        <input
                            type="text"
                            id="bondholder"
                            value={bondholder}
                            onChange={(e) => setBondholder(e.target.value)}
                            required
                            style={{width:"100%"}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="principalAmount">Principal Amount</label>
                        <input
                            type="number"
                            id="principalAmount"
                            value={principalAmount}
                            onChange={(e) => setPrincipalAmount(e.target.value)}
                            required
                            style={{width:"100%"}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="interestRate">Interest Rate (%)</label>
                        <input
                            type="number"
                            id="interestRate"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            required
                            style={{width:"100%"}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="maturityDate">Maturity Date</label>
                        <input
                            type="date"
                            id="maturityDate"
                            value={maturityDate}
                            onChange={(e) => setMaturityDate(e.target.value)}
                            required
                            style={{width:"100%"}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="issuanceDate">Issuance Date</label>
                        <input
                            type="date"
                            id="issuanceDate"
                            value={issuanceDate}
                            onChange={(e) => setIssuanceDate(e.target.value)}
                            required
                            style={{width:"100%"}} />
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="couponFrequency">Coupon Payment Frequency</label>
                        <select
                            id="couponFrequency"
                            value={couponFrequency}
                            onChange={(e) => setCouponFrequency(e.target.value)}
                            required
                        >
                            <option value="">Select Frequency</option>
                            <option value="annually">Annually</option>
                            <option value="semi-annually">Semi-Annually</option>
                            <option value="quarterly">Quarterly</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <input
                            type="text"
                            id="paymentMethod"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="collateral">Collateral</label>
                        <input
                            type="text"
                            id="collateral"
                            value={collateral}
                            onChange={(e) => setCollateral(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="law">Governing Law</label>
                        <input
                            type="text"
                            id="law"
                            value={law}
                            onChange={(e) => setLaw(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="form-btn">Submit Agreement</button>
                </form>
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
        </div>
        
        
    );
};

export default BondAgreementForm;
