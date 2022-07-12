import React from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import "./NavComponents.css";
import logo from "../assets/logo-netflix.svg";

const NavComponents = ({ handleCreatAcc }) => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top img-logo"
                    alt="Magbank logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#inicio">Início</Nav.Link>
                    <Nav.Link href="#series">Séries</Nav.Link>
                    <Nav.Link href="#filmes">Filmes</Nav.Link>
                    <Nav.Link href="#bombando">Bombando</Nav.Link>
                    <Nav.Link href="#minhalista">Minha Lista</Nav.Link>
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Título, Gente e Gêneros"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavComponents;

/* Tarefas: importar o serch lupa, notificações, perfil logo dropdown */
