import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/newlogo.png'
import './Header.css'

const Header = () => {
    return (
      //NavBar
        <Navbar collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
        <img alt="logo" src={img} width="100%" height="30" className="d-inline-block align-top"/>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="menu-bar">
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="menu" to="/home">Home</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="menu" to="/about">About</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="menu" to="/services">Services</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="menu" to="/contact">Contact Us</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;