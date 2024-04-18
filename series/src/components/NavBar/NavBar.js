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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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

    const handlePasswordUpdate = async () => {
        try {
            const requestData = { email: localStorage.getItem('email'), password: newPassword };
            console.log("Request data:", requestData);

            const email = localStorage.getItem('email');
            const response = await fetch('http://localhost:5050/updatePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password: newPassword })
            });

            if (response.ok) {
                console.log("Contraseña actualizada");
                props.onHide();
            } else {
                console.log("Error al actualizar la contraseña", response.status);
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDescriptionUpdate = async () => {
        try {
            const email = localStorage.getItem('email');
            const response = await fetch('http://localhost:5050/addProperty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, value: newDescription })
            });

            if (response.ok) {
                console.log("Descripción actualizada");
                props.onHide();
                localStorage.setItem('descripcion', newDescription);
            } else {
                console.log("Error al actualizar la descripción", response.status);
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const descripcion = localStorage.getItem('descripcion');
        setNewDescription(descripcion);
    }, [props.show]);

    const handleDeleteDescription = async () => {
        try {
            const email = localStorage.getItem('email');
            const response = await fetch('http://localhost:5050/deleteProperty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                console.log("Descripción eliminada");
                props.onHide();
                localStorage.setItem('descripcion', "");
            } else {
                console.log("Error al eliminar la descripción", response.status);
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const email = localStorage.getItem('email');
    const descripcion = localStorage.getItem('descripcion');
    console.log(descripcion)

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
                <h6>Correo</h6>
                <p>{email}</p>
                <h6>Descripción</h6>
                <p>{descripcion}</p>
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
                <IconButton aria-label="delete" onClick={handleDeleteDescription} >
                    <DeleteIcon />
                </IconButton>
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

    const handleDeleteAccount = async () => {
        const email = localStorage.getItem('email');

        try {
            const response = await fetch('http://localhost:5050/deleteUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                console.log("Cuenta eliminada");
                navigate("/", { replace: true });
            } else {
                console.log("Error al eliminar la cuenta", response.status);
            }
        } catch (error) {
            console.log(error);
        }
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
                        <NavDropdown.Item onClick={handleDeleteAccount} >Eliminar cuenta</NavDropdown.Item>

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
