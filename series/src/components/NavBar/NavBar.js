import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '@mui/icons-material/Person';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [showDescriptionForm, setShowDescriptionForm] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    useEffect(() => {
        setShowPasswordForm(false);
    }, [props.show]);

    useEffect(() => {
        setShowDescriptionForm(false);
    }, [props.show]);

    const handlePasswordUpdate = () => {
        console.log("Nueva contraseña:", newPassword);
        props.onHide();
    }

    const handleDescriptionUpdate = () => {
        console.log("Nueva descripción:", newDescription);
        props.onHide();
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Perfil
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Nombre</h6>
                <p>Información...</p>
                <br />
                <h6>Apellido</h6>
                <p>Información...</p>
                <br />
                <h6>Correo</h6>
                <p>Información...</p>
                <br />
                <h6>Contraseña</h6>
                <p>Información...</p>
                <br />
                <h6>Edad</h6>
                <p>Información...</p>
                <br />
                <h6>Descripción</h6>
                <p>{newDescription}</p>
                <br />
                {showPasswordForm && (
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <h6>Nueva Contraseña</h6>
                            <Form.Control type="password" placeholder="Nueva contraseña" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                )}
                {showDescriptionForm && (
                    <Form>
                        <Form.Group controlId="formBasicDescription">
                            <h6>Nueva Descripción</h6>
                            <Form.Control as="textarea" placeholder="Nueva descripción" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                        </Form.Group>
                    </Form>
                )}
            </Modal.Body>
            <Modal.Footer>
                {!showPasswordForm ? (
                    <Button style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }} onClick={() => setShowPasswordForm(true)}>Actualizar Contraseña</Button>
                ) : (
                    <Button style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }} onClick={handlePasswordUpdate}>Guardar</Button>
                )}
                {!showDescriptionForm ? (
                    <Button style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }} onClick={() => setShowDescriptionForm(true)}>Actualizar Descripción</Button>
                ) : (
                    <Button style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }} onClick={handleDescriptionUpdate}>Guardar</Button>
                )}
                <Button
                    style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }}
                    onClick={props.onHide}
                >
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function NavBar() {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

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
                        <NavDropdown.Item onClick={() => setModalShow(true)} >Mi perfil</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout} >Cerrar sesion</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout} >Eliminar cuenta</NavDropdown.Item>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
