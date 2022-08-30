import React, { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="white" expand="md">
      <NavbarBrand>Fitness Sqaure</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/register">
              Register memeber
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/payment">
              Payment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/payment-all">
              Payment Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/">
              Member List table
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                id="MakhannaTooltip"
                tag={ReactLink}
                to="/excerise/bodyPart"
              >
                List of Body part
              </DropdownItem>

              <DropdownItem
                id="MaizeTooltip"
                tag={ReactLink}
                to="/excerise/target"
              >
                List of Target
              </DropdownItem>

              <DropdownItem
                id="BlackCardemonTooltip"
                tag={ReactLink}
                to="/excerise/equipement"
              >
                List of Equipment
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Call Us +91 9199740364</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavNew;
