import React, {useState} from 'react';
import {Typography, TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import useStyles from './styles'
import {commentPost} from '../../actions/posts'

const CommentSection = ({post}) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const classes = useStyles()
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  // const commentsRef = useRef()

  const handleClick = async() => {
    const finalComment = `${user.result.name} : ${comment}`
    // console.log(finalComment)
    const newComments = await dispatch(commentPost(finalComment, post._id))
    setComments(newComments)
    setComment('')

    // commentsRef.current.scrollIntoView({behaviour: 'smooth'})
  }

  return (
    <>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentContainer}>

          <div><Typography gutterBottom variant="h6">Comments</Typography></div>
          <div className={classes.commentsInnerContainer}>
            {comments.length ?
             comments.map((c, i) => (
               <Typography key={i} gutterBottom variant="subtitle1" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '3%', borderRadius: '0.1em'}}>
                  <strong>{c.split(': ')[0]}</strong> :
                  {c.split(':')[1]}
                </Typography>
              )) : 
              <Typography>
              <strong>You are the first one here. Write a comment to start the conversation!</strong>
              </Typography>
            }
          </div>
        </div>

        <div>
          <Typography gutterBottom variant="h6">Write A Comment</Typography>
          <TextField 
            fullWidth
            minRows={4}
            variant="outlined"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{marginTop: '10px'}}
            fullWidth
            disabled={!comment || !user}
            variant="contained"
            onClick={handleClick}
            color="primary"
          >
            {!user ? "Sign in to comment!" : "Comment"}
          </Button>
        </div>
      </div>
    </>
  )
}

export default CommentSection
