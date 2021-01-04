import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { action } from '../../../redux/actions/cart'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 200,
    },
    image: {
        width: 200,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    button: {
        margin: theme.spacing(1),
        width: '200px'
    },
}));

export default function CartCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [counter, setCounter] = React.useState(0);
    const onView = () => {
        props.history.push({
            pathname: '/app/view',
            search: '?query=viewDetails',
            state: { product: props.details }
        })
    }
    const onAddToCart = () => {
        dispatch(action.addToCart(props.details));
    }
    const handleIncrement = () => {
        setCounter(counter + 1);
        let cartDetails = {
            productId: props.details.id,
            quantity: counter + 1
        }
        dispatch(action.addQuantity(cartDetails));
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
        let cartDetails = {
            productId: props.details.id,
            quantity: counter - 1
        }
        dispatch(action.addQuantity(cartDetails));
    };

    const onRemoveItem = () => {
        console.log("CART CARD:", props.details);
        dispatch(action.removeFromCart(props.details));
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container justify="flex-start" direction="column" spacing={2}>
                    <Grid>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={onRemoveItem}
                        >
                            Delete
      </Button>
                    </Grid>
                    {/* <Grid item> */}
                    <ButtonBase className={classes.image} onClick={onView}>
                        <img className={classes.img} alt="complex" src={props.details.image} />
                    </ButtonBase>
                    {/* </Grid> */}

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="subtitle1" noWrap>
                                    {props.details.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom color="textSecondary" style={{ fontWeight: 'bold' }}>
                                    ${props.details.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify="space-evenly" spacing={2}>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button onClick={handleIncrement}>+</Button>
                        {counter > 0 && <Button disabled>{counter}</Button>}
                        {counter > 0 && <Button onClick={handleDecrement}>-</Button>}
                    </ButtonGroup>
                    <Button variant="contained" color="primary" >
                        Buy Now
                            </Button>
                </Grid>
            </Paper>
        </div >
    );
}