import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    // margin: '30px 0',
    position: 'sticky',
    top: '0',
    backgroundColor: 'rgba(240, 240, 240, 0.35)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7em 2em',
    
  },
  signinTypo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5em'
    },
  },
  logout: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5em'
    },
  },
  image: {
    marginRight: '0.2em',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '20%'
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '400px',
    color: 'rgb(255, 255, 255)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse'
    },
  },
  username: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  brandContainer: {
    [theme.breakpoints.down('sm')]: {
      scale: '0.6'
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    // [theme.breakpoints.down('sm')]: {
    //   visibility: 'show'
    // },
  },
  mobileMenu: {
    // color: 'white',
    // [theme.breakpoints.up('sm')]: {
      display: 'none'
    // },
  }
}));