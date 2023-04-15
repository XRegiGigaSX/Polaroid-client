import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    // margin: '30px 0',
    position: 'sticky',
    top: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7em 2em',
    
  },
  logout: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em'
    },
  },
  image: {
    marginLeft: '15px',
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
    width: '400px',
    color: 'rgb(255, 255, 255)',
    
  },
  username: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden'
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em'
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden'
    },
  },
  mobileMenu: {
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  }
}));