import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  heroContainer: {
    paddingTop: "1.5%",
    display: 'flex',
    justifyContent: 'space-evenly', 
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '12vh'
    }
  },
  appBar: {
    borderRadius: 15,
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  PostContainer: {
    width: '100%'
    // height: '70vh',
    // overflowY: 'scroll',
    // boxShadow:' 0 0 50px 15px rgba(0, 0, 0, 0.7)'
  },
  pagination: {
    borderRadius: 4,
    marginBottom: '2vh',
    padding: '16px',
  },
  input: {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '0.3em',
  },
  appBarSearch: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    borderRadius: 4,
    marginBottom: '1rem', 
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(15px)',
    color: 'white',
    width: '32%',
    height: '35%',
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    padding: '2em'
  }, 
  postShare: {
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    width: '40%'
  },
  backCanvas: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  backButton: {
    position: 'absolute',
    color: 'white',
    top: '15vh',
    left: '3%'
  },
  BottomDrawer: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0', right: '0', left: '0',
    height: '10vh'
  },
  BottomDrawerDesk: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    position: 'fixed',
    width: '5%',
    height: '10em',
    bottom: '5vh',
    right: '0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '1em 0 0 1em', 
    backgroundColor: 'rgba(200, 200, 200, 0.6)',
    backdropFilter: 'blur(10px)'
  }
}));