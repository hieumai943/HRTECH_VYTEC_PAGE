import { useEffect, useState } from "react";
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'

import Container from 'react-bootstrap/Container'
import logo from '../assets/logo_VYTEC.png';
import navIcon1 from '../assets/hrt_logo.png';

export const NavBar = () =>{
  const [activeLink,setActiveLink] = useState('home');
  const [scrolled,seScrolled] = useState(false);
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="/">
            <img id="logo_vytech" src={logo} alt="Logo"  />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>ĐĂNG KÝ</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>THỂ LỆ</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>TIMELINE</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>GIẢI THƯỞNG</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>VỀ CHÚNG TÔI</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="logo_hr">
                <a href="#"><img src={navIcon1} alt="" /></a>
       
              </div>
          
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}