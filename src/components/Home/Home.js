import React, {useState} from  'react';
import { useDispatch } from 'react-redux'
import { getPostsBySearch } from '../../actions/posts'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import useStyles from './styles'
import Pagination from '../Pagination'

function useQuery(){
    return new URLSearchParams(useLocation().search);
}


function Home() {

    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')
    

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [currentId, dispatch])

    const searchPost = () => {
        // if(!search.trim() && !tags.length){ history.push('/posts')}
        // console.log(search, tags)
        if(search.trim() || tags){
            dispatch(getPostsBySearch({search, tags: tags.join(',')}))
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        }else{
            history.push('/posts')
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){
            searchPost();
        }
    }

    const handleAddTag = (tag) => (setTags([...tags, tag]))
    
    const handleDelTag = (tagToDel) => (setTags(tags.filter((tag) => tag!==tagToDel)))
    
    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.heroContainer} container justify-content='space-evenly' align-items='stretch' spacing={3} >
                    <Grid item xs={12} sm={6} md={9} className={classes.PostContainer} >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField 
                            name="search" 
                            variant="outlined" 
                            label="Search Memories" 
                            fullWidth
                            value={search}
                            onChange={(e) => {setSearch(e.target.value)}}
                            onKeyPress={handleKeyPress}
                        />
                        <ChipInput 
                            style={{margin: '1% 0'}}
                            value={tags}
                            onAdd={handleAddTag}
                            onDelete={handleDelTag}
                            label="Search Tags"
                            variant="outlined"
                        />
                        <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                    </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={6} className={classes.pagination}>
                                <Pagination page={page}  />
                            </Paper>    
                        )}
                        
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home