import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavBarLogin from '../../components/NavBar-Login/NavBar-Login';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            const response = await fetch('http://localhost:5050/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(response)
                console.log(data);
                localStorage.setItem('email', email);
                localStorage.setItem('nombre', data.name);
                localStorage.setItem('apellido', data.apellido);
                localStorage.setItem('contrasena', data.contrasena);
                localStorage.setItem('descripcion', data.descripcion);
                navigate('/home');
            } else {
                console.log("Error al iniciar sesión");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Login">
            <div className="Login-NavBar">
                <NavBarLogin />
            </div>
            <div className="Login-Content">
                <div className="formLogin">
                    <h1>Bienvenido</h1>
                    <div className="contentForm">
                        <Form style={{ width: "70%" }}>
                            <Form.Group className="mb-3" controlId="formGridName">
                                <TextField fullWidth label="Usuario" id="fullWidth" name="user" value={email} onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Form.Group>

                            <br />

                            <Form.Group className="mb-3" controlId="formGridName">
                                <TextField fullWidth label="Contraseña" id="fullWidth" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PasswordIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Form.Group>

                            <br />

                            <div className="ButtonNew" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button onClick={handleSubmit} style={{ height: "55px", width: "150px", backgroundColor: "transparent", color: "black", borderColor: "#000" }}>
                                    Iniciar Sesión
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
