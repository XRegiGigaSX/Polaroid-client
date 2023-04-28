import React, {useState, useEffect} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Avatar, Button } from  "@material-ui/core"
import useStyles from './styles.js'
import memories from '../../images/logo.webp'
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";
import decode from 'jwt-decode'

function Navbar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user)

    const logout  = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/');
        setUser(null);
    }


    useEffect(() => {
        const token = user?.token;
        if(token){
            const dToken = decode(token);
            if(dToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
        // console.log(user)
    }, [location])

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                {/* <Typography component={Link} to="/" className={classes.heading} variant='h2' align="center">Polaroid</Typography> */}
                <img className={classes.image} src={memories} alt="memories" height="60" />

            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user?.result?.pf}>{user.result.name.charAt(0).toUpperCase()}</Avatar>
                        <Typography className={classes.username} variant="h6">{user.result.name}</Typography>
                        <Button component={Link} to="/" variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        <Button className={classes.mobileMenu}><MenuIcon/></Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.signinTypo}> Sign Up</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar