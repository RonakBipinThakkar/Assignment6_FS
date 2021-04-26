/* eslint linebreak-style: ["error","windows"] */
import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon, Tooltip, OverlayTrigger,Grid
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import Contents from './contents.jsx';

function NavBar() 
{
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Header>
        <Navbar.Brand>Product Tracker</Navbar.Brand>
      </Navbar.Header>
        <Nav>
          <LinkContainer exact to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/products">
            <NavItem>Product List</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default function Page() 
{
  return (
    <div>
      <NavBar />
      <Grid fluid>
      <Contents />
      </Grid>
    </div>
  );
}