import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function RecipeReviewCard() {
    const [openDialog, setOpenDialog] = useState(false);

    const handleCardClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 300 }} onClick={handleCardClick} style={{ cursor: "pointer" }}>
                <CardHeader title="NOMBRE" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Popularidad
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
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
                            Nombre
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Edad
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Nacionalidad
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Premios
                    </Typography>
                    <DialogContentText>
                        Información...
                    </DialogContentText>
                    <br />
                    <Typography variant="h6" component="div" style={{ color: "#000" }}>
                        Series
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
