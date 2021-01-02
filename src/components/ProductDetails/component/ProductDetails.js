import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import ProductList from '../../ProductList/index'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
    },
    image: {
        width: 400,
        height: 400,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    grid: {
        paddingTop: theme.spacing(10),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    button: {
        width: '180px',
        margin: '10px 5px'
    },
    producList: {
        overflow: 'auto',
        maxHeight: 480
    }
}));

export default function ProductDetails() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image} onClick={handleToggle}>
                            <img className={classes.img} alt="complex" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2} className={classes.grid}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    Standard license
                                  </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                 </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty
                                 </Typography>
                                <Typography variant="h5" color="textSecondary" gutterBottom>
                                    ID: 1030114
                                 </Typography>
                                <Grid item >
                                    <Button variant="contained" className={classes.button}>Add To Cart </Button>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Buy Now
                            </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm container className={classes.producList}>
                        <ProductList />
                    </Grid>
                </Grid>
            </Paper>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <img className={classes.img} alt="complex" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />

            </Backdrop>
        </div>
    );
}