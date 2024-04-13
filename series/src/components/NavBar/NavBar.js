import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '@mui/icons-material/Person';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">WATCHWISE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#deets">Mi perfil</Nav.Link>
                        <Nav.Link href="#memes">Recomendaciones</Nav.Link>
                        <Nav.Link href="#memes">Buscar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title={<PersonIcon />} id="basic-nav-dropdown" style={{ right: "20px" }}>
                        <NavDropdown.Item href="#action/3.1">Cerrar sesion</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Eliminar cuenta</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
