import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <Container className="footer-container">
            <Row className="text-center py-2">
                <Col xs={12} lg={6} className="text-lg-left mt-2">
                    <p className="footer-text">
                        | Netflix | todos os direitos reservados a Netflix - streaming
                        developed to train knowledge, non-profit. | Developer by: Helton
                        Cunha
                    </p>
                </Col>

                <Col xs={12} lg={4} className="py-xs-5">
                    <Image src={applestore} />
                    <Image src={googleplay} className="m-2" />
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
