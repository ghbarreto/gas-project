import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>
        Santos & Vieira
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/orders">Orders</Nav.Link>
        <Nav.Link href="/admin/panel">Admin</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
