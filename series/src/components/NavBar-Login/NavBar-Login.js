import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import NumbersIcon from '@mui/icons-material/Numbers';

function MyVerticallyCenteredModal(props) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [edad, setEdad] = useState("");
    const [descripcion] = useState("");

    const handleSubmit = async (e) => {
        try {
            const response = await fetch('http://localhost:5050/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, apellido, correo, contraseña, edad, descripcion })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log("Registrado con éxito");
                props.onHide();
            } else {
                console.log("Error al registrarse");
                console.log(response);
            }
        }
        catch (error) {
            console.log(error);
        }
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
                    Registrarse
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <TextField fullWidth label="Nombre" id="fullWidth" name="name" value={nombre} onChange={(e) => setNombre(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonAddIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <TextField fullWidth label="Apellido" id="fullWidth" name="secondName" value={apellido} onChange={(e) => setApellido(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonAddIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridName">
                        <TextField fullWidth label="Correo" id="fullWidth" name="mail" value={correo} onChange={(e) => setCorreo(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridName">
                        <TextField fullWidth label="Contraseña" id="fullWidth" name="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PasswordIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridName">
                        <TextField fullWidth label="Edad" id="fullWidth" name="age" value={edad} onChange={(e) => setEdad(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <NumbersIcon />
                                    </InputAdornment>
                                )
                            }}  
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }}
                    onClick={handleSubmit}
                >
                    Registrarse
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function NavBarLogin() {
    const [isHovered, setIsHovered] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>WATCHWISE</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button
                        style={{
                            backgroundColor: "transparent",
                            borderColor: "black",
                            color: "black",
                            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                            transition: "transform 0.2s",
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={() => setModalShow(true)}
                    >
                        Registrarse
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarLogin;
