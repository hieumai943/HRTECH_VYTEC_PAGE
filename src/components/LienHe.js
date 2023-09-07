import React, { useState } from "react";
import Alert from "./Alert";
import AlertGmail from "./AlertGmail";

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo_VYTEC_.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const LienHe = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const [popupMessage, setPopupMessage] = useState('');
  const handleSpanClick1 = () => {
    setPopupMessage();
    setShowAlert1(true);
  };
  const   handleSpanClick2 = () => {
    setPopupMessage();
    setShowAlert2(true);
  };
  const handleCloseAlert = () => {
    setShowAlert1(false);
    setShowAlert2(false);

  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <img src={logo} alt="Logo" />

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <div className="line">
                <a onClick={() => handleSpanClick1()}>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </a>
                {showAlert1 && (
                  <AlertGmail
                    message={popupMessage}
                    onClose={handleCloseAlert}
                  />
                )}
                <span id="ten">Gmail</span>
              </div>
              <div className="line">
                <a onClick={() => handleSpanClick2()}>
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                </a>
                {showAlert2 && (
                  <Alert
                    message={popupMessage}
                    onClose={handleCloseAlert}
                  />
                )}
                <span id="ten">Phone</span>
              </div>
              <div className="line">
                <a href="https://www.facebook.com/hrtechclub">
                  <img src={navIcon2} alt="Icon" />
                </a>

                <span id="ten">Facebook</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <a href="https://www.facebook.com/VYTEC.Official"id="contact">LIÊN HỆ NGAY</a>
      <p id="uet">© 2023 UET-VNU</p>
    </footer>
  );
};
