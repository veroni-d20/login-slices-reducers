import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { logout } from '../slice/loginSlice';
//import { selectUser } from '../slice/loginSlice';
//import {logout} from '../reducer/loginreducer';

const useStyles = makeStyles((theme) => createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 400,
        margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
        marginTop: theme.spacing(2),
        flexGrow: 1
    },
    header: {
        textAlign: 'center',
        background: '#212121',
        color: '#fff'
    },
    card: {
        marginTop: theme.spacing(10)
    }
  }));

const Logout = () => {
const classes = useStyles();
//const user = useSelector(selectUser);
const {user} = useSelector((state) => state.logReducer);
const dispatch = useDispatch();
const logoutFunction =(e) => {
    e.preventDefault();

    dispatch(logout());
};

    return (
            <Card className={classes.card}>
            <CardContent>
            <div>
            <h1>Welcome {user.name}</h1>
            <CardActions>
            <Button variant="contained"
            size="large"
            color="secondary"
            onClick={(e)=>logoutFunction(e)}>Logout</Button>
            </CardActions>
            </div>
            </CardContent>
            </Card>
    )
}

export default Logout