import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Tivya tharshini</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>&#169; Tivya. 2025 Portfolio Website</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Tivyatharshini"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub style={{ fontSize: "1.4em" }}/>
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/SauravK01_07"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter color="#1DA1F2" style={{ fontSize: "1.4em" }}/>
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="http://www.linkedin.com/in/tivya-tharshini-ba316b292"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn color="#0077B5" style={{ fontSize: "1.4em" }}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram color="#E1306C" style={{ fontSize: "1.4em" }}/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
