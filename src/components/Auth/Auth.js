import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from '@react-oauth/google'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import Input from './Input'
import Icon from './Icon'
import jwt_decode from "jwt-decode";
import {signin, signup, googlesignin} from "../../actions/auth"
// import { render } from 'react-dom'

//get your client id on https://console.developers.google.com/

const initialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: ''}

function Auth() {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(isSignup){
            dispatch(signup(formData, history))
        }else{
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const googleSuccess = async (credRes) => {
        console.log("google success 1")
        const res = jwt_decode(credRes.credential);
        console.log(res);
        const result = {sub: res?.sub, email: res?.email, name: res?.name, fname: res?.given_name, lname: res?.family_name, pf: res?.picture }

        // const result = res?.profileObj;
        // const token = res?.tokenId;
        // console.log(result);
        try {
            // dispatch({type: 'AUTH', data:{result} }) 
            dispatch(googlesignin(result, history))
            history.push("/") 
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was a failure")
    }

    const handleShowPassword = () => setShowPassword(!showPassword)

    const switchMode = () => setIsSignup(!isSignup)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {
                            isSignup && <>
                                <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastname" label="Last Name" handleChange={handleChange} half />
                            </>
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoFocus />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} autoFocus />
                        {
                            isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword} />
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        {isSignup ? "Create account" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId="671547310420-kvgdcgn9vqort4ortb6j3p3baqcf9q1a.apps.googleusercontent.com"
                        render={(renderProps) => 
                            (<Button
                                className={classes.googleButton}
                                fullWidth 
                                color="primary" 
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />} 
                                variant="contained"
                            >
                            Google Sign In
                            </Button>)
                        }
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                        useOneTap
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already registered? Sign in here" : "New around here? Sign up now"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth