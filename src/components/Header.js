import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/" className="navbar__brand">
          Tech Nova
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            

            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            {/* {/* {!isLoggedIn && ( */}
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>

                <Nav.Link href="/login">Login</Nav.Link>
              </>
            {/* // )} */} 
            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/product/all">Show All Product</NavDropdown.Item>
              <NavDropdown.Item href="/product/create">Create Product</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/cart">Go To Cart</NavDropdown.Item>
              <NavDropdown.Item href="/orders">Order History</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
      </Nav.Link>
                        </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
