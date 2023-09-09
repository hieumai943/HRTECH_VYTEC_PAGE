import { useEffect, useState } from "react";
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'

import Container from 'react-bootstrap/Container'
import logo from '../assets/logo_VYTEC_.png';
import navIcon1 from '../assets/hrt_logo.png';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar = () =>{
  const [activeLink,setActiveLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
}
  return (
    <Router>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
         <Navbar.Brand href="/">
            <img id="logo_vytech" src={logo} alt="Logo"  />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          <Nav.Link href="#banner" className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('banner')}>ĐĂNG KÝ</Nav.Link>
              <Nav.Link href="#thele" className ={activeLink === 'thele' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('thele')}>THỂ LỆ</Nav.Link>
              <Nav.Link href="#timeline" className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('timeline')}>TIMELINE</Nav.Link>
              <Nav.Link href="#giaithuong" className={activeLink === 'giaithuong' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('giaithuong')}>GIẢI THƯỞNG</Nav.Link>
              <Nav.Link href="#testimonials" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>VỀ CHÚNG TÔI</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="logo_hr">
                <a href="https://www.facebook.com/hrtechclub"><img src={navIcon1} alt="" /></a>
              </div>
        
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  )
}