import React from 'react';

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo_VYTEC.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';



export const LienHe = () => {
  return (
        
    <footer className="footer">
    <Container>
      <Row className="align-items-center">

    
          <img src={logo} alt="Logo" />

        <Col size={12} sm={6} className="text-center text-sm-end">
        
          <div className="social-icon">
            <div className='line'>
            <a href="#">
           <span>  <FontAwesomeIcon icon={faEnvelope} /></span>
           </a>
           <span id='ten'>Gmail</span>
            </div>
            <div className='line'>
            <a href="#"><span><FontAwesomeIcon icon={faPhone} /></span></a>
           <span id='ten' >Phone</span>
            </div>
            <div className='line'>
            <a href="#"><img src={navIcon2} alt="Icon" /></a>

           <span id='ten'>Facebook</span>
            </div>
          </div>
          
         
        </Col>
       
      </Row>
    </Container>
    <span id="contact">LIÊN HỆ NGAY</span>
    <p id='uet'>© 2023 UET-VNU</p>
  </footer>
    
  )
}