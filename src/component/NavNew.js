import React, { useEffect, useState } from "react";
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
import {  isAdmin, isLoggedIn } from "../auth/Auth";

const NavNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const[login,setLogin]=useState(false);
  const[admin,setAdmin]=useState(false);

  

  useEffect(()=>{
    setLogin(isLoggedIn());
    console.log("navbar update "+login);
    
    setAdmin(isAdmin())
    console.log("navbar for admin "+admin);
  },[login])

  
  
    return (
      <Navbar color="success" expand="md" >
        <NavbarBrand>Fitness Sqaure</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
  
          <Nav className="me-auto" navbar>
            {
              !admin && (
                <>
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
            </>
              )
            }
            
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Member List table
              </NavLink>
            </NavItem>
  
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Excerise
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
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Call Us +91 9199740364</NavbarText>
          
        </Collapse>
      </Navbar>
    );
  
  

  
};

export default NavNew;
