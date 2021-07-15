import React from 'react';
import { Navbar } from 'react-bootstrap';
import './footer.css'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <Navbar  expand="lg">
                <Navbar.Brand href="#home">Copyrigths</Navbar.Brand>
            </Navbar>
        </div>
            
    );
};

export default Footer;