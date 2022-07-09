import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5">
                <Col xs={12} lg={6} className="text-lg-left mb-3">
                    <p className="logo">Dashboard Projects</p>
                    <b>Developer by: Helton Cunha</b>
                </Col>

                <Col xs={12} lg={4} className="py-xs-5 mb-3">
                    <Image src={applestore} />
                    <Image src={googleplay} className="m-2" />
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
