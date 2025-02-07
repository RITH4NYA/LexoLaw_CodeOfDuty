import React, { useState } from 'react';
import '../Styles/Signup.css'; // Import custom CSS

export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);

    const handleFileSubmit = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", { name, email, password, avatar });
    };

    return (
        <div className="signup-page-wrapper">
            {/* Header Section - Fixed Navbar */}
            <header className="signup-site-header">
                <div className="signup-logo-section">
                    <h1 className="signup-brand-logo">Lexolution</h1>
                </div>
                <nav className="signup-navigation">
                    <a href="/lexo">Home</a>
                    <a href="/LawPage">About</a>
                    <a href="/Service">Our Service</a>
                </nav>
            </header>

            {/* Main Banner Below the Navbar */}
            <section className="signup-main-banner">
                <h1 className="signup-banner-title">Create An Account ?</h1>
                <p className="signup-banner-subtext">Join us to experience the best features.</p>
            </section>

            {/* Signup Form */}
            <div className="signup-form-wrapper">
                <div className="signup-form-box">
                    <h2 className="signup-form-header">Create Your Account</h2>
                    <form className="signup-form-elements" onSubmit={handleSubmit}>
                        <div className="signup-input-group">
                            <label className="signup-input-label">Full Name</label>
                            <input
                                type="text"
                                className="signup-input-field"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-input-group">
                            <label className="signup-input-label">Email Address</label>
                            <input
                                type="email"
                                className="signup-input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-input-group signup-password-group">
                            <label className="signup-input-label">Password</label>
                            <input
                                type="password"
                                className="signup-input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-input-group signup-file-upload-group">
                            <label className="signup-input-label">Profile Picture</label>
                            <div className="signup-avatar-display">
                                {avatar ? (
                                    <img src={URL.createObjectURL(avatar)} alt="avatar" className="signup-avatar-image" />
                                ) : (
                                    <span className="signup-default-avatar-icon">📷</span>
                                )}
                            </div>
                            <input
                                type="file"
                                className="signup-file-input"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileSubmit}
                            />
                        </div>

                        <button type="submit" className="signup-submit-btn">Register</button>

                        <p className="signup-toggle-form-link">
                            Already have an account? <a href="/login">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="signup-site-footer">
                <div className="signup-social-links">
                    <a href="https://facebook.com" className="signup-social-icon">🔵</a>
                    <a href="https://twitter.com" className="signup-social-icon">🐦</a>
                    <a href="https://instagram.com" className="signup-social-icon">📸</a>
                </div>
                <p>&copy; 2025 MyApp. All rights reserved.</p>
            </footer>
        </div>
    );
};
