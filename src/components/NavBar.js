import { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo_VYTEC.png';
import navIcon1 from '../assets/hrt_logo.png';

export const NavBar = () =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,seScrolled] = useState(false);


useEffect(()=>{
    const onScroll = ()=>{
        if(window.scrollY  > 50){
            seScrolled(true);
        }
        else{
            seScrolled(false);
        }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, [])
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img id="logo_vytech" src={logo} alt="Logo"  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mO-auto">
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

    )
}