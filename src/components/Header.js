import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { GitHub } from "react-feather";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="py-3 bg-white border-bottom" expand="sm" container>
      <NavbarBrand tag={Link} to="/">
        Rhhha.
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/project">
              Proyek
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/update">
              Pembaruan
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink
              href="https://github.com/aipnurhayadi/"
              className="text-primary"
            >
              <GitHub size={14} />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
