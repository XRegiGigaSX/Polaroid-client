import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyles from './styles'
import moment from "moment"
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts.js'
import {useHistory} from 'react-router-dom'

export default function Post({ post, setCurrentId, handleNewPost }) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
    // console.log(post);
    // console.log(user?.result)

    const openPost = () => history.push(`/posts/${post._id}`)

    return (
        <Card className={classes.card} raised elevation={6}>
            {/* <ButtonBase className={classes.cardActions} onClick={openPost}> */}
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} onClick={openPost} />
            <div className={classes.overlay} onClick={openPost} >
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
            {post?.creator === user?.result?._id ? <Button style={{ color: 'white' }} size="small" onClick={() => {setCurrentId(post._id); handleNewPost()} } >
                    <MoreHorizIcon fontSize="medium" />
                </Button> : ""}
               
            </div>
            <div className={classes.details} onClick={openPost} >
                <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>

            </div>
                <Typography variant="h5" className={classes.title} gutterBottom>{post.title}</Typography>
            <CardContent onClick={openPost} >
                <Typography variant="body2" gutterBottom>{post.message}</Typography>
            </CardContent>
            {/* </ButtonBase> */}
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))} >
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp;Like&nbsp;
                    {post.likes.length === 0 ? "" : post.likes.length}
                </Button>
                {(post?.creator === user?.result?._id) ? <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button> : ""}
                {/* <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button> */}
            </CardActions>
        
        </Card>
    )
}
