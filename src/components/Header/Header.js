import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="transparent" expand="lg" className='navbar-dark fw-bold pt-4'>
                <Container>
                    <Navbar.Brand href="#">BOTSPOT AI</Navbar.Brand>
                    <div className='d-flex sm-icon'>
                        <Nav.Link className='' href="#action2"><i class="fas fa-phone"></i></Nav.Link>
                        <Nav.Link href="#action2"><i class="fas fa-search"></i></Nav.Link>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 nav"
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div className='d-flex lg-icon'>
                                <Nav.Link className='' href="#action2"><i class="fas fa-phone"></i></Nav.Link>
                                <Nav.Link href="#action2"><i class="fas fa-search"></i></Nav.Link>
                            </div>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;