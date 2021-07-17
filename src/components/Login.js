import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import { login, loginFailed,setIsButtonDisabled } from '../slice/loginSlice';
//import {login, loginFailed,setIsButtonDisabled} from '../reducer/loginreducer';
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

const Login = () => {
const [name,setName] = useState("");
const [password,setPassword] = useState("");
const classes = useStyles();
const {user, isButtonDisabled, message} = useSelector((state) => state.logReducer);
const dispatch = useDispatch();
useEffect(() => {
    if (name.trim() && password.trim()) {
     dispatch(setIsButtonDisabled(false));
    } else {
      dispatch(setIsButtonDisabled(true));
    }
  }, [name,password]);
const loginFunction= (e)=>{
    e.preventDefault();
    console.log("Button clicked");
    if (name === 'pattarai@gmail.com' && password === 'licet@123')
    {
        dispatch(
        login({
        name:name,
        password:password,
        isLoggedIn:true,
        })
    );
    }
    else{
        dispatch(loginFailed(true));
    }
};

        return(
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
            <CardHeader className={classes.header} title="Login App"/>
            <CardContent>
                <div>
                    <TextField
                    fullWidth
                    id="username"
                    type="email"
                    label="Username"
                    placeholder="Username"
                    margin="normal"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField
                    fullWidth
                    id="userpass"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    margin="normal"
                    value={password}
                    helperText={message}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.loginBtn}
                    onClick={(e)=>loginFunction(e)}
                    disabled={isButtonDisabled}>
                    Login
                </Button>
            </CardActions>
            </Card>
        </form>
        );
}

export default Login;