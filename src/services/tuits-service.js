import axios from 'axios';
const API_BASE = 'https://tuiter-node-server-app-fg.herokuapp.com/api'

// const API_BASE = 'http://localhost:4000/api'
// const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findAllTuits = async () => {
    console.log(TUITS_API)
    const response = await axios.get(TUITS_API);
    console.log(response)
    const tuits = response.data;
    console.log(tuits)
    return tuits;
}

export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}