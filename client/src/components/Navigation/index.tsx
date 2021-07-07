import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavbarBrand, Nav } from "reactstrap";

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <Navbar color="light" light sticky="top" expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/Home">
          Todo
        </NavbarBrand>
        <Nav className="mr-auto" />
      </Container>
    </Navbar>
  );
};
export default Navigation;
