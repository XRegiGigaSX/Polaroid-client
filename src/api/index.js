import axios from 'axios'

const API = axios.create({baseURL: 'https://polaroid-api.onrender.com/'})
// const API = axios.create({baseURL: 'http://localhost:3001/'})
// http://localhost:3000/
// https://polaroid-api.netlify.app
// const url = 'http://localhost:3001/posts';
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`, id);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`, id)
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, {value})

export const googleSignIn = (result) => API.post('/user/googlesignin', result)
export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
``