import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import Pagination from "../Pagination";

// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import MoreIcon from "@mui/icons-material/MoreVert";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [postSearch, setPostSearch] = useState(false);
  const [postShare, setPostShare] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  // useEffect(() => {
  //     dispatch(getPosts());
  // }, [currentId, dispatch])

  const searchPost = () => {
    // if(!search.trim() && !tags.length){ history.push('/posts')}
    // console.log(search, tags)
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/posts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddTag = (tag) => setTags([...tags, tag]);

  const handleDelTag = (tagToDel) =>
    setTags(tags.filter((tag) => tag !== tagToDel));

  const handleNewPost = () => {
    setPostShare(!postShare);
  };

  const handleSearch = () => {
    setPostSearch(!postSearch);
  };

  const handleBack = () => {
    setPostShare(false);
    setPostSearch(false);
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.heroContainer}
          container
          justify-content="space-evenly"
          align-items="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={11} md={11} className={classes.PostContainer}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          {!searchQuery && !tags.length && (
            <Paper elevation={6} className={classes.pagination}>
              <Pagination page={page} />
            </Paper>
          )}
        </Grid>
        </Grid>
          {postSearch && (
            <div className={classes.backCanvas}>
            <div className={classes.backButton}><ArrowBackIcon onClick={handleBack} /></div>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  fullWidth
                  value={search}
                  className={classes.input}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  onKeyPress={handleKeyPress}
                />
                <ChipInput
                  style={{ margin: "1% 0" }}
                  value={tags}
                  onAdd={handleAddTag}
                  onDelete={handleDelTag}
                  className={classes.input}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button
                  onClick={() => {searchPost(); handleBack();}}
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </AppBar>
            </div>
          )}

          {postShare && (
            <div className={classes.backCanvas}>
            <div className={classes.backButton}><ArrowBackIcon onClick={handleBack} /></div>
              <div className={classes.postShare} >
                <Form
                  currentId={currentId}                 
                  setCurrentId={setCurrentId}
                  handleBack={handleBack}
                />
              </div>
            </div>         
          )}

          

        <div className={classes.BottomDrawer}>
          <SearchIcon onClick={handleSearch} />
          <AddIcon onClick={handleNewPost} />
        </div>

        <div className={classes.BottomDrawerDesk}>
          <SearchIcon onClick={handleSearch} />
          <AddIcon onClick={handleNewPost} />
        </div>

        

      </Container>
    </Grow>
  );
}

export default Home;
