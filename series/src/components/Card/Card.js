import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const optionCalificacion = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 }
];

const optionVisualizaciones = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 }
];

const optionEstado = [
    { label: 'Viendo', value: 'Viendo' },
    { label: 'Terminado', value: 'Terminado' }
];

function MyVerticallyCenteredModal(props) {
    const [estado, setEstado] = useState(null);
    const [rating, setRating] = useState("");
    const [repeticiones, setRepeticiones] = useState("");

    const handleEstadoChange = (event, value) => {
        if (value) {
            if (value.value === 'Viendo') {
                setEstado(true);
                console.log(estado);
                console.log(typeof (estado));
            } else if (value.value === 'Terminado') {
                setEstado(false);
                console.log(estado);
                console.log(typeof (estado));
            }
        } else {
            setEstado("");
        }
    };

    const handleRatingChange = (event, value) => {
        setRating(value ? parseInt(value.value) : 0);
        console.log(value);
        console.log(typeof (value.value));
    };

    const handleRepeticionesChange = (event, value) => {
        setRepeticiones(value ? parseInt(value.value) : 0);
        console.log(value);
        console.log(typeof (value.value));
    };

    const handleSubmit = async (e) => {
        try {
            const requestData = {
                email: localStorage.getItem('email'),
                serie: props.title,
                estado: estado,
                rating: rating,
                repeticiones: repeticiones
            };

            console.log("Cuerpo de la solicitud:", requestData);

            const response = await fetch('http://localhost:5050/addFavoriteSeries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log("Serie agregada a favoritos");
                props.onHide();
            } else {
                console.log("Error al agregar la serie a favoritos");
                console.log(response);
            }
        } catch (error) {
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
                    Agregar a favoritos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={optionCalificacion}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => <TextField {...params} label="Calificación" />}
                            onChange={handleRatingChange}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridName">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={optionVisualizaciones}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => <TextField {...params} label="Veces vista" />}
                            onChange={handleRepeticionesChange}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridName">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={optionEstado}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => <TextField {...params} label="Estado de visualización" />}
                            onChange={handleEstadoChange}

                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: "transparent", borderColor: "black", color: "black" }}
                    onClick={handleSubmit}
                >
                    Agregar a favoritos
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function RecipeReviewCard(props) {
    const [openDialog, setOpenDialog] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [isFavorite] = useState(props.isFavorite);

    const handleCardClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDelete = () => {
        fetch("http://localhost:5050/deleteFavoriteSeries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                serie: props.title
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log("Serie eliminada de favoritos");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 300, maxWidth: 301 }} style={{ cursor: "pointer" }}>
                <CardHeader title={props.title} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.rating}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {isFavorite ? null : (
                        <IconButton aria-label="add to favorites" onClick={() => setModalShow(true)}>
                            <FavoriteIcon />
                        </IconButton>
                    )}
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        title={props.title}
                    />
                    <IconButton aria-label="more" onClick={handleCardClick} >
                        <MoreVertIcon />
                    </IconButton>
                    {isFavorite ? (
                        <IconButton aria-label="delete" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    ) : null}
                </CardActions>
            </Card>

            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: "#F8F9FA" }} >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="black"
                            onClick={handleCloseDialog}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div" style={{ color: "#000" }}>
                            {props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Sinopsis
                    </Typography>
                    <DialogContentText>
                        {props.description}
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Número de capitulos
                    </Typography>
                    <DialogContentText>
                        {props.Total_caps}
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Duración de los capitulos
                    </Typography>
                    <DialogContentText>
                        {props.duration}
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Director
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Actores
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Género
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Plataforma
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                </DialogContent>
                <List>
                    <ListItemButton>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItemButton>
                </List>
            </Dialog>
        </React.Fragment>
    );
}

export default RecipeReviewCard;
