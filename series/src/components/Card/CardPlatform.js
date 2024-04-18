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
import DeleteIcon from '@mui/icons-material/Delete';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function RecipeReviewCard(props) {
    const [openDialog, setOpenDialog] = useState(false);
    const [isFavorite] = useState(props.isFavorite);

    const handleCardClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDelete = () => {
        fetch("http://localhost:5050/deleteFavoritePlatform", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                platform: props.name
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
            <Card sx={{ minWidth: 300 }} style={{ cursor: "pointer" }}>
                <CardHeader title={props.name} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Popularidad
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {isFavorite ? null : (
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    )}
                    <IconButton aria-label="more" onClick={handleCardClick} >
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
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
                            {props.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Tipo
                    </Typography>
                    <DialogContentText>
                        {props.tipo}
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Lanzamiento
                    </Typography>
                    <DialogContentText>
                        {props.lanzamiento}
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Precio
                    </Typography>
                    <DialogContentText>
                        ${props.precio}
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Géneros
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
