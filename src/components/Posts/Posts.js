import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'

export default function Posts({ setCurrentId, handleNewPost }) {
    const {posts, isLoading} = useSelector((state) => state.posts)
    const classes = useStyles();

    if(!posts.length && !isLoading){ return 'No posts to show here'};

    return (
        <>
            
            {
                isLoading ? <CircularProgress /> : 
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid item key={post.id} xs={12} sm={12} md={6} lg={3} >
                            <Post post={post} setCurrentId={setCurrentId} handleNewPost={handleNewPost} />
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    )
}
