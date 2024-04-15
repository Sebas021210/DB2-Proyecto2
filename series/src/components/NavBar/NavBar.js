import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '@mui/icons-material/Person';

function NavBar() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/home");
    }

    const handleSearch = () => {
        navigate("/search");
    }

    const handleLogout = () => {
        navigate("/", { replace: true });
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>WATCHWISE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={handleHome} >Mi perfil</Nav.Link>
                        <Nav.Link onClick={handleSearch} >Buscar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title={<PersonIcon />} id="basic-nav-dropdown" style={{ right: "20px" }}>
                        <NavDropdown.Item onClick={handleLogout} >Cerrar sesion</NavDropdown.Item>
                        <NavDropdown.Item>Eliminar cuenta</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
