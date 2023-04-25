import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand={'lg'} collapseOnSelect>
                <Container>
                    <Navbar.Brand href={'/'}>JuhyeongShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'ml-auto'}>
                            <Nav.Link href={'/order'}>
                                <i className={'fas fa-shopping-cart'}></i>
                                Cart
                            </Nav.Link>
                            <Nav.Link href={'/login'}>
                                <i className={'fas fa-user'}></i>
                                Login
                            </Nav.Link>
                            <Nav.Link href={'/signup'}>
                                <i className={'fas fa-user'}></i>
                                Signup
                            </Nav.Link>
                            <Nav.Link href={'/profile'}>
                                <i className={'fas fa-user'}></i>
                                Profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;