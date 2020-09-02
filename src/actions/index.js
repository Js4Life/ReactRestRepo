import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './types'
import streams from '../api/streams'
import history from '../history'



export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (disptach,getState) => {

    const {userId} = getState().auth;

    const response = await streams.post('/streams', {...formValues , userId });

    disptach({ type: CREATE_STREAM, payload: response.data })

    history.push('/')

}

export const fetchStreams = () => async disptach => {
    const response = await streams.get('/streams')

    disptach({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)

    dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`streams/${id}`, formValues)

    dispatch({ type: EDIT_STREAM, payload: response.data })
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`streams/${id}`)

    dispatch({ type: DELETE_STREAM, payload: id })
}