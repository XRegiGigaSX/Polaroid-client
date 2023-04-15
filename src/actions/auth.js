import { AUTH } from '../constants/actionTypes';
import * as api from "../api/index.js"

export const googlesignin = (result, history) => async(dispatch) => {
    // console.log("google success 2");
    // console.log(result)
    try {

        const {data} = await api.googleSignIn(result);
        // console.log("google success api");
        console.log(data);
        dispatch({type: AUTH, data});
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signin = (formData, history) => async(dispatch) => {
    try {
        const {data} = await api.signIn(formData);
        console.log({data});
        dispatch({type: AUTH, data});
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        const {data} = await api.signUp(formData);
        dispatch({type: AUTH, data});
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}