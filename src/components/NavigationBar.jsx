import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Form,
  InputGroup,
  Button,
  Modal,
  NavLink,
  Row
} from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {

    return (
      <>
        <Navbar className="navigation-bar top">
          <Container fluid className="top-navigation-container">
            <Col className="logo-column">
              <Navbar.Brand href="/" className="header-logo">
                <h1 className="header-logo">
                  melon <img src="/melon-icon.svg" alt="logo" />
                </h1>
              </Navbar.Brand>
            </Col>
            <Col className="search-column">
              <InputGroup className="search-group">
                <Nav.Link
                  className="search-button"
                >
                  <img src="/search.svg" alt="search" className="search-svg" />
                </Nav.Link>
                <Form.Control
                  type="search"
                  placeholder="Find your next fit"
                  className="search-bar"
                />
              </InputGroup>
            </Col>
            <Col className="links-column">
              <Nav.Link >
                <p className="login-link">
                  <img src="/account.svg" alt="account" className="account-svg" />{" "}
                  login / register
                </p>
              </Nav.Link>
              <Nav.Link href="#favorites">
                <p className="favorites-link">
                  <img
                    src="/favorite.svg"
                    alt="heart"
                    className="favorites-svg"
                  />{" "}
                  favorites
                </p>
              </Nav.Link>
              <Nav.Link href="/cart">
                <p className="cart-link">
                  <img src="/cart.svg" alt="cart" className="cart-svg" />{" "}
                  0
                </p>
              </Nav.Link>
            </Col>
          </Container>
        </Navbar>
        <Navbar className="navigation-bar bottom">
          <Container className="category-container" fluid>
            <Nav variant="underline" className="justify-content-center" as={Col}>
              <Nav.Link className="category" href="#browse/new">
                new arrivals
              </Nav.Link>
              <Nav.Link className="category" href="#browse/men">
                men
              </Nav.Link>
              <Nav.Link className="category" href="#browse/women">
                women
              </Nav.Link>
              <Nav.Link className="category" href="#browse/accessories">
                accessories
              </Nav.Link>
              <Nav.Link className="category" href="#browse/shoes">
                shoes
              </Nav.Link>
              <Nav.Link className="category" href="#browse/sale">
                sale
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default NavigationBar;
