import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../nasa.svg'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // TODO create an array representing NavLink items in Navbar.js 
    // Render with map function.   
    return (
        <Navbar color="light" light expand="md">
            <div className="container">
                <NavbarBrand tag={Link} to="/gallery">
                    <Logo />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {/* <NavItem>
                    <NavLink tag={Link} to="/">Movies</NavLink>
                </NavItem> */}
                        <NavItem>
                            <NavLink tag={Link} to="/gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/example">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contact">Contact</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Example;