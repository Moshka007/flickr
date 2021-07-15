import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import user from '../../resources/assets/user.png';
import './header.css'

const Header: React.FC = () => {
    return (
        <>
            <Navbar className="header"  expand="lg" >
                <Navbar.Brand href="#home">Image Finder</Navbar.Brand>
                <Image className="user-icon" src={user}/>
            </Navbar>
        
        </>
    );
};

export default Header;