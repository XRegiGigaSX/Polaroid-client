import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  heroContainer: {
    paddingTop: "1.5%",
    display: 'flex',
    justifyContent: 'space-between'
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
    // height: '70vh',
    // overflowY: 'scroll',
    // boxShadow:' 0 0 50px 15px rgba(0, 0, 0, 0.7)'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem', 
    display: 'flex',
    padding: '16px'
  }
}));