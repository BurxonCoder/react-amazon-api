import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row justify-content-between align-items-center">
<span className="copyright">&copy; NewCastle School {new Date().getFullYear()}</span>
            </div>

        </footer>
    );
};

export default Footer;