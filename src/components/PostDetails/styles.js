import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '2em',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '500px',
    // height: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },

  },
  card: {
    display: 'flex',
    width: '100%',
    // height: '65vh',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      flexWrap: 'wrap',
    },
  },
  section: {
    // borderRadius: '20px',
    backgroundColor: 'transparent',
    width: '45%',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
    },
  },
  imageSection: {
    marginLeft: '20px',
    width: '55%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%'
    },
  },
  recommendedPosts: {
    display: 'flex',
    // width: '20%',
    // justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      widht: '100%',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '38vh',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexDirection: 'column-reverse',
    },
  }, 
  commentsInnerContainer: {
    height: '60%',
    overflowY: 'auto',
    marginRight: '2em',
    padding: '1%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  }, 
  commentContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '0.8em'
    },
  },
  recContainer: {
    margin: '1%', 
    cursor: 'pointer', 
    border: '2px solid black', 
    borderRadius: '0.5em', 
    padding: '0.5em', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      margin: '1em auto',
    },
  },
  postDetailTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em'
    },
  }

}));