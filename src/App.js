import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import useStyles from './styles.js'
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails'
import { GoogleOAuthProvider } from '@react-oauth/google';



const App = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <BrowserRouter>
            <GoogleOAuthProvider clientId="671547310420-kvgdcgn9vqort4ortb6j3p3baqcf9q1a.apps.googleusercontent.com">

                <Container className={classes.heroContainer} maxWidth="xl">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={() => <Redirect to="/posts" />} />
                        <Route path="/posts" exact component={Home} />
                        <Route path="/posts/search" exact component={Home} />
                        <Route path="/posts/:id" exact component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                    </Switch>
                    {/* <Home /> */}
                </Container>
            </GoogleOAuthProvider>

        </BrowserRouter>
    )
}

export default App;